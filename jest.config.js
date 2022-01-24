// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  ...require("./testUtils/jest-common"),
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/components/**/*.js",
    "<rootDir>/pages/**/*.js",
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
    "<rootDir>/testUtils/jest-prettier.js",
    "<rootDir>/testUtils/jest-lint.js",
    "<rootDir>/testUtils/jest-client.js",
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
