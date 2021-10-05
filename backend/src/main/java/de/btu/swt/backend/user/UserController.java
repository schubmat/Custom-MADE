package de.btu.swt.backend.user;

import de.btu.swt.backend.project.Project;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.ok;

@RestController
public class UserController {
    private final UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/me")
    public ResponseEntity currentUser(@AuthenticationPrincipal UserDetails userDetails) {
        Optional<User> userOptional = repository.findByUsername(userDetails.getUsername());
        if (userOptional.isPresent()) {
            return ok(UserDTOUtils.user2DTO(userOptional.get()));
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body("Authentication name is not in user repository.");
    }

    @GetMapping("/users")
    public ResponseEntity allUsers() {
        return ResponseEntity.ok(repository.findAll());
    }

    /*
    changes the role of the current user. returns true on success, returns false otherwise
     */
    public boolean changeRole(String userName, Role role) {
        Optional<User> optionalUser = repository.findByUsername(userName);
        if (!optionalUser.isPresent()) return false;
        User user = optionalUser.get();
        user.setRole(role);
        return modifyUserInDB(user);
    }

    /*
    grants the specified user access to a project based on the project id. returns true on success, returns false otherwise
     */
    public boolean grantAccessToProject(String userName, int projectID) {
        Optional<User> optionalUser = repository.findByUsername(userName);
        if (!optionalUser.isPresent()) return false;
        User user = optionalUser.get();
        user.getProjects().add(getProjectByID(projectID));
        return modifyUserInDB(user);
    }

    /*
    withdraws a specified user access to a project based on the project id. returns true on success, returns false otherwise
     */
    public boolean withdrawAccessToProject(String userName, int projectID) {
        Optional<User> optionalUser = repository.findByUsername(userName);
        if (!optionalUser.isPresent()) return false;
        User user = optionalUser.get();
        user.getProjects().remove(getProjectByID(projectID));
        return modifyUserInDB(user);
    }

    /*
    changes a user's name. returns true on success, returns false otherwise
     */
    public boolean changeUserName(String oldUserName, String newUserName) {
        Optional<User> optionalUser = repository.findByUsername(oldUserName);
        if (!optionalUser.isPresent()) return false;
        User user = optionalUser.get();
        List<User> allUsers = repository.findAll();
        for (User u : allUsers) {
            if (u.getUsername().equals(newUserName)) return false;
        }
        user.setUsername(newUserName);
        return modifyUserInDB(user);
    }

    /*
    changes a user's email. returns true on success, returns false otherwise
    */
    public boolean changeEmail(String userName, String email) {
        Optional<User> optionalUser = repository.findByUsername(userName);
        if (!optionalUser.isPresent()) return false;
        User user = optionalUser.get();
        List<User> allUsers = repository.findAll();
        for (User u : allUsers) {
            if (u.getEmail().equals(email)) return false;
        }
        user.setEmail(email);
        return modifyUserInDB(user);
    }

    private Project getProjectByID(int projectID) {
        throw new AssertionError("not yet implemented"); //TODO
    }

    /*
    modifies the user in the database. returns true on success, returns false otherwise
     */
    private boolean modifyUserInDB(User user) {
        throw new AssertionError("not yet implemented!"); //TODO
    }
}
