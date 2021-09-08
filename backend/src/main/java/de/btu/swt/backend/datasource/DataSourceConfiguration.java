package de.btu.swt.backend.datasource;

import com.zaxxer.hikari.HikariDataSource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

import javax.sql.DataSource;

/**
 * The DataSourceConfiguration tells the system which software is supposed to be used for saving data.
 * The following software shall be supported:
 *  - H2DatabaseEngine (in-memory database)
 *  - MySQL Database system (persistent database --> requires seperate installation)
 */
@Configuration
@Slf4j
public class DataSourceConfiguration {

    // The datasource configuration from application.properties.
    private String username;
    private String password;
    private String url;

    @Autowired
    public DataSourceConfiguration(Environment env) {
        log.info("Setting up DataSource ...");
        // Environment is a class, which manages the access to application.properties.

        /*
        Import all the data from application.properties.
        env.getProperty(..) returns the value of the property or null if the property was not found.
         */
        this.username = env.getProperty(PropertyNames.USERNAME.getPropertyName());
        this.password = env.getProperty(PropertyNames.PASSWORD.getPropertyName());
        this.url = env.getProperty(PropertyNames.URL.getPropertyName());

        // If any of the parameters is not present, do not use a persistent database.
        boolean persistentDatabase;
        if (username == null || password == null || url == null) {
            persistentDatabase = false;
        } else {
            persistentDatabase = true;
            // If the user tells the software to use an in-memory database, then set the according flag.
            String persistent = env.getProperty(PropertyNames.PERSISTENT.getPropertyName());
            if (persistent != null) {
                persistentDatabase = persistent.equals("true");
            }
        }

        // Example Configuration of in-memory database.
        if (!persistentDatabase) {
            String username = env.getProperty(PropertyNames.INMEMORYDB_USERNAME.getPropertyName());
            String password = env.getProperty(PropertyNames.INMEMORYDB_PASSWORD.getPropertyName());
            String url = env.getProperty(PropertyNames.INMEMORYDB_URL.getPropertyName());

            if (username == null) username = "sa";
            if (password == null) password = "password";
            if (url == null) url = "jdbc:h2:mem:testdb";

            this.username = username;
            this.password = password;
            this.url = url;
        }

        // Some logging.
        if (persistentDatabase) {
            log.info("Using a persistent Database.");
        } else {
            log.info("Using an In-Memory Database.");
        }

        if (username == null)
            log.error("Datasource: Username info not present.");
        if (password == null)
            log.error("Datasource: Password info not present.");
        if (url == null)
            log.error("Datasource: URL info not present.");

    }

    private HikariDataSource hikariDataSource() {
        return DataSourceBuilder
                .create()
                .username(this.username)
                .password(this.password)
                .url(this.url)
                .type(HikariDataSource.class)
                .build();
    }

    @Bean
    public DataSource getDataSource() {
        return hikariDataSource();
    }

}
