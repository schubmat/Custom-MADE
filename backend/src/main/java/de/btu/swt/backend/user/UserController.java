package de.btu.swt.backend.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

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
        if(userOptional.isPresent()){
            return ok(UserDTOUtils.user2DTO(userOptional.get()));
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body("Authentication name is not in user repository.");
    }

    @GetMapping("/users")
    public ResponseEntity allUsers() {
        return ResponseEntity.ok(repository.findAll());
    }
}
