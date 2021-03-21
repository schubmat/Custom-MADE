package de.btu.swt.backend.user;

import java.util.HashMap;
import java.util.Map;

/**
 * UserDataTransferObjectUtils (UserDTOUtils)
 * - to find the bidirectional dependencies when transformed into Json
 */
class UserDTOUtils {

    static Map<String, Object> user2DTO(User user) {
        Map<String, Object> model = new HashMap<>();
        model.put("name", user.getUsername());
        model.put("role", user.getRole());
//        Object[] projects = user.getMemberships().stream().map(projectMembership -> {
//            Project project = projectMembership.getProject();
//            Map<String, Object> projectModel = new HashMap<>();
//            projectModel.put("id", project.getId());
//            projectModel.put("name", project.getName());
//            projectModel.put("permission", projectMembership.getPermission());
//            return projectModel;
//        }).toArray(Object[]::new);
//        model.put("projects", projects);
        return model;
    }

}
