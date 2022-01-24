// jest.config.js

module.exports = {
  ...require("./jestUtils/jest-common"),
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/components/**/*.js",
    "<rootDir>/pages/**/*.js",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  coverageThreshold: {
    global: {
      branches: 5,
      functions: 5,
      lines: 5,
      statements: 5,
    },
  },
  coverageReporters: ["html", "text"],
  projects: [
    "<rootDir>/jestUtils/jest-prettier.js",
    "<rootDir>/jestUtils/jest-lint.js",
    "<rootDir>/jestUtils/jest-client.js",
  ],
};
