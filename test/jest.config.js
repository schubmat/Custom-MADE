module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    // unit tests
    '**/login.unit.test.ts',
    '**/dataManagement.unit.test.ts',
    '**/validation.unit.test.ts',
    '**/export.unit.test.ts',

    // integration tests
    '**/integration.test.ts',

    // stress tests
    // '**/stress.test.ts',

    // all tests (that are not listed here)
    // '**/?(*.)+(test).ts'
  ],
};
