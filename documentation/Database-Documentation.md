# Database Documentation

## Target

To persist data one needs to add a database. This is related to [Issue #22 Integrate User Management](https://github.com/schubmat/Custom-MADE/issues/22).

## Dependencies

The base system can be configured, so that it runs out-of-the-box. But to get persistent storage, you have to be running an instance of **MySQL Server** .

## Implementation

The following describes how the system is constructed and how it can be changed. 

#### Architecture

The system uses a typical Spring database architecture.

![Spring Database Architecture](./spring_database_architecture.png)

It implements the two APIs *Jakarta Persistence API (JPA)* and *Java Database Connectivity (JDBC)* to connect to and manage a database. The database system which is connected to the backend can be configured to use either a persistent MySQL Server or an in-memory H2 Database Engine. 

The corresponding configuration can be found in the class `de.btu.swt.backend.datasource.DataSourceConfiguration`. It automatically uses the parameters set in `resources/application.properties`. The required parameters are described later on.

*The in-memory database is only intended for testing purposes.*

#### Configuration

The file `resources/application.properties` configures the attributes of the system. The Custom-MADE database system supports the following attributes:

- `app.datasource.persistent` : true | false
  The persistence flag determines, if a persistent database should be used (MySQL) or not (H2DB).
  
  *Telling the system to use a persistent datasource (means setting this flag to `true`) strictly requires a valid setup of MySQL server. Otherwise Custom-MADE will crash.*
- `app.datasource.jdbc-url`: String
  The JDBC-URL specifies where to access the database. For a persistent datasource (here: MySQL) a url can look like this: `jdbc:mysql://localhost:3306/authdb?serverTimezone=Europe/Rome`.
- `app.datasource.username`: String
  The username is the first part of the login data used to access the database. It has to match an account configured in the databasesystem.
- `app.datasource.password`: String
  
  The password is the second part of the login data used to access the database. It has to match the password configured for the username above.
- `app.datasource.inmemory.jdbc-url`: String
  The in-memory JDBC-URL tells the system where to access the in-memory database. The default configuration is `jdbc:h2:mem:testdb`. It can be overwritten by using this attribute.
- `app.datasource.inmemory.username`: String
  The username is used to access the in-memory database. The default configuration is `sa`. It can be overwritten by using this attribute.
- `app.datasource.inmemory.password`: String
  The password is used to access the in-memory database. The default configuration is `password`. It can be overwritten by using this attribute.

The datasource configuration has a dedicated logging. It should be used for detecting issues.


