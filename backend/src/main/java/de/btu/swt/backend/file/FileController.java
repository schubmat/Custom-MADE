package de.btu.swt.backend.file;

import de.btu.swt.backend.user.User;
import de.btu.swt.backend.user.UserRepository;
import de.btu.swt.backend.util.Constants;
import de.btu.swt.backend.util.ErroneousFile;
import de.btu.swt.backend.util.FileExport;
import de.btu.swt.backend.util.StringResponse;
import de.btu.swt.backend.version.Permissions;
import de.btu.swt.backend.version.Version;
import de.btu.swt.backend.version.VersionDTOBuilder;
import de.btu.swt.backend.version.git_sync.GitException;
import de.btu.swt.backend.version.git_sync.RemoteSynchronizer;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import javax.persistence.EntityNotFoundException;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Deque;
import java.util.Optional;

@RestController
@RequestMapping("/files")
public class FileController {
    private final FileRepository fileRepository;
    private final UserRepository userRepository;
    private final RemoteSynchronizer gitService;


    public FileController(FileRepository fileRepository, UserRepository userRepository, RemoteSynchronizer gitService) {
        this.fileRepository = fileRepository;
        this.userRepository = userRepository;
        this.gitService = gitService;
    }

    @GetMapping(value = "/{id}/version")
    public ResponseEntity getVersion(@AuthenticationPrincipal User user,
                                  @PathVariable long id) {
        if (!hasPermissions(user, id, Permissions.BROWSE_FILES))
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("File does not exist or user does not have permissions to read file");
        File file = fileRepository.getOne(id);
        Version version = file.getVersion();
        gitService.pullSynchronize(user, version);
        return ResponseEntity.ok(new VersionDTOBuilder(version).build());
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity getFile(@AuthenticationPrincipal User user,
                                  @PathVariable long id) {
        if (!hasPermissions(user, id, Permissions.BROWSE_FILES))
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("File does not exist or user does not have permissions to read file");
        File file = fileRepository.getOne(id);
        return ResponseEntity.ok(new FileDTOBuilder(file).build());
    }

    @PatchMapping("/{id}/validate")
    public ResponseEntity validate(@AuthenticationPrincipal User user,
                                 @PathVariable long id) {
        if (!hasPermissions(user, id, Permissions.BROWSE_FILES))
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("File does not exist or user does not have permissions to read file");
        File file = fileRepository.getOne(id);
        if (file.status == FileStatus.IN_CONFLICT)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This file is in a unresolved merge conflict");
        Deque<ErroneousFile> erroneousFiles = FileExport.validateAndCreatePermanentExportNew(file, user);
        file = fileRepository.save(file);

        try {
            gitService.commitPullAndPushChanges(new File[]{file},"added exports", user, file.getVersion());
        } catch (GitException | IOException e) {
        }
        FileValidationDTO dto = new FileValidationDTO(fileRepository.getOne(file.getId()), "");
        if (!erroneousFiles.isEmpty())
            dto.log = erroneousFiles.getFirst().log;
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/{id}/raw")
    public ResponseEntity getRaw(@AuthenticationPrincipal User user,
                                 @PathVariable long id) {
        if (!hasPermissions(user, id, Permissions.BROWSE_FILES))
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("File does not exist or user does not have permissions to read file");
        File file = fileRepository.getOne(id);
        return FileExport.getFileResponse(file.getContent(), file.getFileName(), HttpStatus.OK);
    }

    @GetMapping("/{id}/export")
    public ResponseEntity getExport(@AuthenticationPrincipal User user,
                                    @PathVariable long id) {
        if (!hasPermissions(user, id, Permissions.BROWSE_FILES))
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("File does not exist or user does not have permissions to read file");
        File file = fileRepository.getOne(id);
        if (file.getStatus() != FileStatus.VALID)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("File is not valid. You may have to validate again");
        return FileExport.fetchExports(file, user);
    }

    private boolean hasPermissions(User user, long fileId, Permissions actions) {
        File file; 

        try {
            file = fileRepository.getOne(fileId);
        } catch (EntityNotFoundException e) {
            System.err.println("File with fileId \'" + fileId + "\' not found in repository.");
            return false;
        }

        return file.getVersion().getPermissions(user).contains(actions);
    }
    
    @PostMapping("/{id}/openFileInWorkspace")
    public ResponseEntity<?> openFileinTheiaWorkspace(@AuthenticationPrincipal UserDetails userDetails, @PathVariable long id) {
        User user = userRepository.findByUsername(userDetails.getUsername()).orElse(new User());
        
        Optional<File> optFile = fileRepository.findById(id);
        Version version; 
        if (!optFile.isPresent()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("No Version with file id = " + id + " found");
        }
        
    	version = optFile.get().getVersion();
        
        Path fileWorkspaceDirectory = version.getGeneralFilesDirectory();
//        Path globalTheiaSettingsFile = Paths.get( System.getProperty("user.home"), Constants.GLOBAL_THEIA_WORKSPACES_FILE);
        
        
//        try {
//            FileInputStream fInputStream = new FileInputStream(globalTheiaSettingsFile.toFile());
//            BufferedReader buffReaderOldFileContent = new BufferedReader(new InputStreamReader(fInputStream));
//            String currentLine;
//            StringBuilder newFileContent = new StringBuilder();
//            //Read File Line By Line
//            while ((currentLine = buffReaderOldFileContent.readLine()) != null) {
//            	if (currentLine.contains("recentRoots")) {
//	                newFileContent.append("{\"recentRoots\":[\"file://");
//	                System.err.print("{\"recentRoots\":[\"file://" + fileWorkspaceDirectory.toString().replace(" ","%20") + "\"]}" + System.lineSeparator());
//	                newFileContent.append(fileWorkspaceDirectory.toString().replace(" ","%20") + "\"]}" + System.lineSeparator());
////	                System.err.print(currentLine.substring(currentLine.indexOf("\":[\"") + 3));
////	                newFileContent.append(currentLine.substring(currentLine.indexOf("\":[\"") + 3));
////	                newFileContent.append(System.lineSeparator());
//            	} else {
//            		newFileContent.append(currentLine + System.lineSeparator());
//            	}
//            }
//            // Close the input stream
//            fInputStream.close();
//            // Now fileContent will have updated content , which you can override into file
//            FileWriter fStreamWriter = new FileWriter(globalTheiaSettingsFile.toFile());
//            BufferedWriter buffOut = new BufferedWriter(fStreamWriter);
//            buffOut.write(newFileContent.toString());
//            buffOut.close();
//            
//        } catch (Exception e) {//Catch exception if any
//            System.err.println("Error: " + e.getMessage());
//        }
        StringResponse result = new StringResponse(fileWorkspaceDirectory.toString());
        return ResponseEntity.ok().body(result);
    }

}
