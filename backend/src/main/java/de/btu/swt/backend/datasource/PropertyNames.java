package de.btu.swt.backend.datasource;

/**
 *
 * Defines the names of allowed properties.
 *
 * Used by DataSourceConfiguration.
 *
 */
public enum PropertyNames {

    PERSISTENT("app.datasource.persistent"),
    USERNAME("app.datasource.username"),
    PASSWORD("app.datasource.password"),
    URL("app.datasource.jdbc-url"),
    INMEMORYDB_USERNAME("app.datasource.inmemory.username"),
    INMEMORYDB_PASSWORD("app.datasource.inmemory.password"),
    INMEMORYDB_URL("app.datasource.inmemory.jdbc-url");

    PropertyNames(String name) {
        this.propertyName = name;
    }

    private final String propertyName;

    public String getPropertyName() {
        return this.propertyName;
    }

}
