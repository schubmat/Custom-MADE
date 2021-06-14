package de.btu.swt.backend.version;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Builder
@Embeddable
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Permissions implements Serializable {
    //user permissions
    public static final Permissions OWNER = Permissions.builder().canBrowseFiles(true).canChangeFiles(true).canExportFiles(true).canUseAsModel(true).canAddUsers(true).canDeleteVersion(true).canSetGitRepo(true).untouchable(true).build();
    public static final Permissions MAINTAINER = Permissions.builder().canBrowseFiles(true).canChangeFiles(true).canExportFiles(true).canUseAsModel(true).canAddUsers(true).canDeleteVersion(true).canSetGitRepo(true).build();
    public static final Permissions CONTRIBUTOR = Permissions.builder().canBrowseFiles(true).canChangeFiles(true).canExportFiles(true).canUseAsModel(true).build();
    public static final Permissions REPORTER = Permissions.builder().canBrowseFiles(true).canExportFiles(true).canUseAsModel(true).build();
    public static final Permissions STRANGER_ON_PRIVATE = Permissions.builder().canUseAsModel(true).build();
    public static final Permissions STRANGER_ON_PUBLIC = Permissions.builder().canBrowseFiles(true).canUseAsModel(true).build();


    //actions
    public static final Permissions EMPTY = Permissions.builder().build();
    public static final Permissions BROWSE_FILES = Permissions.builder().canBrowseFiles(true).build();
    public static final Permissions CHANGE_FILES = Permissions.builder().canChangeFiles(true).build();
    public static final Permissions EXPORT_FILES = Permissions.builder().canExportFiles(true).build();
    public static final Permissions USE = Permissions.builder().canUseAsModel(true).build();
    public static final Permissions ADD_USERS = Permissions.builder().canAddUsers(true).build();
    public static final Permissions DELETE_VERSION = Permissions.builder().canDeleteVersion(true).build();
    public static final Permissions CONFIG_GIT = Permissions.builder().canSetGitRepo(true).build();


    @Builder.Default
    boolean canBrowseFiles = false;
    @Builder.Default
    boolean canChangeFiles = false;
    @Builder.Default
    boolean canExportFiles = false;
    @Builder.Default
    boolean canAddUsers = false;
    @Builder.Default
    boolean canDeleteVersion = false;
    @Builder.Default
    boolean canUseAsModel = false;
    @Builder.Default
    boolean canSetGitRepo = false;
    @Builder.Default
    boolean untouchable = false;

    @JsonIgnore
    public boolean contains(Permissions necessary) {
        return (this.canBrowseFiles || !necessary.canBrowseFiles)
                && (this.canChangeFiles || !necessary.canChangeFiles)
                && (this.canExportFiles || !necessary.canExportFiles)
                && (this.canAddUsers || !necessary.canAddUsers)
                && (this.canDeleteVersion || !necessary.canDeleteVersion)
                && (this.canUseAsModel || !necessary.canUseAsModel)
                && (this.canSetGitRepo || !necessary.canSetGitRepo)
                && (this.untouchable || !necessary.untouchable);
    }

    @JsonIgnore
    public boolean equals(Permissions other) {
        return this.canBrowseFiles == other.canBrowseFiles
                && this.canChangeFiles == other.canChangeFiles
                && this.canExportFiles == other.canExportFiles
                && this.canAddUsers == other.canAddUsers
                && this.canDeleteVersion == other.canDeleteVersion
                && this.canUseAsModel == other.canUseAsModel
                && this.canSetGitRepo == other.canSetGitRepo
                && this.untouchable == other.untouchable;
    }

    @JsonIgnore
    public boolean isGreaterThan(Permissions other) {
        return !this.equals(other) && this.contains(other);
    }

    @JsonIgnore
    public static boolean isKnown(Permissions requested) {
        return requested.equals(OWNER) || requested.equals(MAINTAINER) || requested.equals(CONTRIBUTOR) || requested.equals(REPORTER);
    }
}



