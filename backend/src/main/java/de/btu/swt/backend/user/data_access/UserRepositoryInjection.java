package de.btu.swt.backend.user.data_access;

import de.btu.swt.backend.user.UserRepository;
import org.springframework.context.annotation.Bean;

public class UserRepositoryInjection {

    @Bean
    public UserRepository userRepository() {
        return new UserMySqlDataAccess();
    }

}
