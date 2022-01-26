// jest.config.js

module.exports = {
  ...require('./jestUtils/jest-common'),
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/components/**/*.js', '<rootDir>/pages/**/*.js', '!**/*.d.ts', '!**/node_modules/**'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  coverageReporters: ['html', 'text'],
  projects: [
    '<rootDir>/jestUtils/jest-prettier.js',
    '<rootDir>/jestUtils/jest-lint.js',
    '<rootDir>/jestUtils/jest-client.js',
  ],
}
