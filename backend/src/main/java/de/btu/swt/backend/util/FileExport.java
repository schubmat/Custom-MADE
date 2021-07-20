package de.btu.swt.backend.util;

import de.btu.swt.backend.file.FileStatus;
import de.btu.swt.backend.storage.Storage;
import de.btu.swt.backend.user.User;
import de.btu.swt.backend.version.Version;
import net.lingala.zip4j.ZipFile;
import net.lingala.zip4j.exception.ZipException;
import net.lingala.zip4j.model.ZipParameters;
import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.*;
import java.nio.file.Path;
import java.sql.Timestamp;
import java.util.*;
import java.util.stream.Collectors;

public class FileExport {
    public static File createUniqueSubDir(String username, Path parent) {
        File result = new File(parent.toFile(), getUniqueName(username + "_", ""));
        result.mkdirs();
        result.mkdir();
        return result;
    }

    public static String getUniqueName(String prefix, String postfix) {
        return prefix + new Timestamp((new Date()).getTime()) + postfix;
    }

    public static Deque<ErroneousFile> validateAndCreatePermanentExportNew(de.btu.swt.backend.file.File file, User userDetails) {
        List<de.btu.swt.backend.file.File> files = new LinkedList<>();
        files.add(file);
        return validateAndCreatePermanentExportNew(files, file.getVersion(), userDetails);
    }

    public static ResponseEntity fetchExports(de.btu.swt.backend.file.File file, User userDetails) {
        List<de.btu.swt.backend.file.File> files = new LinkedList<>();
        files.add(file);
        return fetchExports(files, file.getVersion(), userDetails);
    }

    public static ResponseEntity validateAndCreatePermanentExport(List<de.btu.swt.backend.file.File> files, Version version, User userDetails) {
        java.io.File uniqueSubDir = FileExport.createUniqueSubDir(userDetails.getUsername(), Storage.TMP);

        try {
            Deque<ErroneousFile> erroneousFiles = createPermanentExports(files, version, uniqueSubDir);
            if (erroneousFiles.isEmpty())
                return ResponseEntity.ok("");
            try {
                return onValidationError(erroneousFiles, version, uniqueSubDir, userDetails);
            } catch (ZipException e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Problems with building the zip");
            }
        } finally {
            try {
                FileUtils.deleteDirectory(uniqueSubDir);
            } catch (IOException ignored) {
            }
        }
    }

    public static Deque<ErroneousFile> validateAndCreatePermanentExportNew(List<de.btu.swt.backend.file.File> files, Version version, User userDetails) {
        java.io.File uniqueSubDir = FileExport.createUniqueSubDir(userDetails.getUsername(), Storage.TMP);
        try {
            return createPermanentExports(files, version, uniqueSubDir);
        } finally {
            try {
                FileUtils.deleteDirectory(uniqueSubDir);
            } catch (IOException ignored) {
            }
        }
    }

    public static Deque<ErroneousFile> createPermanentExports(List<de.btu.swt.backend.file.File> files, Version version, User userDetails) {
        java.io.File uniqueSubDir = FileExport.createUniqueSubDir(userDetails.getUsername(), Storage.TMP);
        try {
            return createPermanentExports(files, version, uniqueSubDir);
        } finally {
            try {
                FileUtils.deleteDirectory(uniqueSubDir);
            } catch (IOException ignored) {
            }
        }
    }

    private static Deque<ErroneousFile> createPermanentExports(List<de.btu.swt.backend.file.File> files, Version version, java.io.File uniqueSubDir) {
        files = files.stream().filter(file -> file.getStatus() != FileStatus.IN_CONFLICT).collect(Collectors.toList());
        Deque<ErroneousFile> result = new LinkedList<>();
        List<de.btu.swt.backend.file.File> exportList = new LinkedList<>();
        for (de.btu.swt.backend.file.File file : files) {
            if (!file.getVersion().getId().equals(version.getId()))
                continue;
            try {
                exportList.clear();
                exportList.add(file);
                java.io.File exportDir = version.export(exportList, uniqueSubDir.toPath().resolve(file.getName()).toFile());
                if (exportDir != null) {
                    file.setStatus(FileStatus.VALID);
                    org.apache.commons.io.FileUtils.copyDirectory(exportDir, version.getExportFilesDirectory().toFile());
                }
            } catch (Version.ModelValidationException e) {
                file.setStatus(FileStatus.INVALID);
                result.add(new ErroneousFile(file, e.getMessage()));
            } catch (IOException e) {
                file.setStatus(FileStatus.UNCHECKED);
            }
        }
        return result;
    }


    public static ResponseEntity onValidationError(Deque<ErroneousFile> erroneousFiles, Version version, User userDetails) throws ZipException {
        java.io.File uniqueSubDir = FileExport.createUniqueSubDir(userDetails.getUsername(), Storage.TMP);
        try {
            return onValidationError(erroneousFiles, version, uniqueSubDir, userDetails);
        } finally {
            try {
                FileUtils.deleteDirectory(uniqueSubDir);
            } catch (IOException ignored) {
            }
        }
    }

    private static ResponseEntity onValidationError(Deque<ErroneousFile> erroneousFiles, Version version, File uniqueSubDir, User userDetails) throws ZipException {
        if (erroneousFiles.size() == 1) {
            ErroneousFile erroneousFile = erroneousFiles.getFirst();
            String fileName = erroneousFile.file.getName() + ".log";
            String errorLog = erroneousFile.log;
            MailSender.getInstance().sendMail(
                    userDetails.getEmail(),
                    "MDSE: " + version.getProject().getName() + ":" + version.getVersion() + ":" + erroneousFile.file.getFileName(),
                    "",
                    fileName,
                    errorLog);
            return getFileResponse(errorLog, fileName, HttpStatus.CONFLICT);
        }

        String fileName = version.getProject().getName() + ":" + version.getVersion();
        ZipFile zip = new ZipFile(new java.io.File(uniqueSubDir, fileName + ".zip"));
        for (ErroneousFile file : erroneousFiles) {
            String errorLog = file.log;
            ZipParameters parameters = new ZipParameters();
            parameters.setFileNameInZip(file.file.getName() + ".log");
            zip.addStream(new ByteArrayInputStream(errorLog.getBytes()), parameters);
        }
        MailSender.getInstance().sendMail(
                userDetails.getEmail(),
                "MDSE: " + version.getProject().getName() + ":" + version.getVersion(),
                "",
                zip.getFile());
        return FileExport.getFileResponse(zip.getFile(), HttpStatus.CONFLICT);
    }

    public static ResponseEntity fetchExports(List<de.btu.swt.backend.file.File> files,
                                              Version version,
                                              User userDetails) {
        List<de.btu.swt.backend.file.File> validFiles = files.stream().filter(file -> file.getStatus() == FileStatus.VALID).collect(Collectors.toList());
        List<File> children = new LinkedList<>();
        validFiles.forEach(file -> children.addAll(file.getExports()));
        if (children.isEmpty())
            return ResponseEntity.ok("No exports were" +
                    " generated");
        if (children.size() == 1)
            return FileExport.getFileResponse(children.get(0).getAbsoluteFile(), HttpStatus.OK);
        String fileName = version.getProject().getName() + ":" + version.getVersion();
        java.io.File uniqueSubDir = FileExport.createUniqueSubDir(userDetails.getUsername(), Storage.TMP);
        try {
            ZipFile zip = new ZipFile(new java.io.File(uniqueSubDir, fileName + ".zip"));
            zip.addFiles(children);
            return FileExport.getFileResponse(zip.getFile(), HttpStatus.OK);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unable to export files");
        } finally {
            try {
                FileUtils.deleteDirectory(uniqueSubDir);
            } catch (IOException ignored) {}
        }
    }

    public static ResponseEntity export(List<Version> versions,
                                        User userDetails) {
        java.io.File uniqueSubDir = FileExport.createUniqueSubDir(userDetails.getUsername(), Storage.TMP);

        try {
            for (Version version : versions) {
                if (!version.getGrammar().isHasGenerator())
                    continue;
                try {
                    version.exportAll(uniqueSubDir);
                } catch (Version.ModelValidationException e) {
                    String logName = version.getProject().getName() + ":" + version.getVersion();
                    //oder log stattdessen dem archiv hinzufügen?
                    return FileExport.getFileResponse(e.getMessage(), logName + ".log", HttpStatus.CONFLICT);
                }
            }

            String targetDir = uniqueSubDir.getAbsolutePath() + File.separator + "target";
            File target = new java.io.File(targetDir);
            String fileName = getUniqueName(userDetails.getUsername(), ".zip");
            ZipFile zip = new ZipFile(new java.io.File(uniqueSubDir, fileName));
            for (File file : target.listFiles()) {
                if (file.isDirectory())
                    zip.addFolder(file);
                else
                    zip.addFile(file);
            }
            return FileExport.getFileResponse(zip.getFile(), HttpStatus.OK);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unable to export files");
        } finally {
            try {
                FileUtils.deleteDirectory(uniqueSubDir);
            } catch (IOException ignored) {
            }
        }
    }

    public static ResponseEntity getRawFiles(Version version, UserDetails userDetails) {
        java.io.File uniqueSubDir = FileExport.createUniqueSubDir(userDetails.getUsername(), Storage.TMP);
        String fileName = getUniqueName(version.getProject().getName() + "_" + version.getVersion(), ".zip");
        ZipFile zip = new ZipFile(new java.io.File(uniqueSubDir, fileName));
        try {
            for (de.btu.swt.backend.file.File file : version.getFiles()) {
                zip.addFile(file.getPath().toFile());
            }
            return FileExport.getFileResponse(zip.getFile(), HttpStatus.OK);
        } catch (ZipException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unable to zip files");
        } finally {
            try {
                FileUtils.deleteDirectory(uniqueSubDir);
            } catch (IOException ignored) {
            }
        }
    }


    public static ResponseEntity getFileResponse(File file, HttpStatus status) {
        try {
            InputStream inputStream = new FileInputStream(file);
            InputStreamResource inputStreamResource = new InputStreamResource(inputStream);
            return ResponseEntity.status(status)
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getName() + "\"")
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .contentLength(file.length())
                    .body(inputStreamResource);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    public static ResponseEntity getFileResponse(String content, String fileName, HttpStatus status) {
        ByteArrayResource bar = new ByteArrayResource(content.getBytes());

        return ResponseEntity
                .status(status)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileName + "\"")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .contentLength(bar.contentLength())
                .body(bar);
    }

}
