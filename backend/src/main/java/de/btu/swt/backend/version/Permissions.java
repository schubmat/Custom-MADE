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
    @Override
    public boolean equals(Object other) {
        if (this == other) {
            return true;
        }
        if (other == null || getClass() != other.getClass()) {
            return false;
        }
        Permissions otherPermission = (Permissions) other;
        return this.canBrowseFiles == otherPermission.canBrowseFiles
            && this.canChangeFiles == otherPermission.canChangeFiles
            && this.canExportFiles == otherPermission.canExportFiles
            && this.canAddUsers == otherPermission.canAddUsers
            && this.canDeleteVersion == otherPermission.canDeleteVersion
            && this.canUseAsModel == otherPermission.canUseAsModel
            && this.canSetGitRepo == otherPermission.canSetGitRepo
            && this.untouchable == otherPermission.untouchable;
    }

    @JsonIgnore
    public boolean isGreaterThan(Permissions other) {
        return !this.equals(other) 
            && this.contains(other);
    }

    @JsonIgnore
    public static boolean isKnown(Permissions requested) {
        return requested.equals(OWNER) || requested.equals(MAINTAINER) || requested.equals(CONTRIBUTOR) || requested.equals(REPORTER);
    }

    /**
     * See:
     * https://javarevisited.blogspot.com/2011/10/override-hashcode-in-java-example.html
     * (General contracts for hashCodes)
     */
    public int hashCode() {
        String res = "";
        res = res + this.canBrowseFiles
                + this.canAddUsers
                + this.canChangeFiles
                + this.canExportFiles
                + this.canDeleteVersion
                + this.canSetGitRepo
                + this.canUseAsModel
                + this.untouchable;

        try {
            return Integer.parseInt(res);
        } catch (Exception e) {
            return 0;
        }
    }
}



