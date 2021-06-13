module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    // all unit tests
    // '**/?(*.)+(unit.test).ts',
    // specific
    // '**/login.unit.test.ts',
    '**/dataManagement.unit.test.ts',
    // '**/validation.unit.test.ts',
    // '**/export.unit.test.ts',

    // all integration tests
    // '**/?(*.)+(integration.test).ts',

    // all stress tests
    // '**/?(*.)+(stress.test).ts',
  ],
};
