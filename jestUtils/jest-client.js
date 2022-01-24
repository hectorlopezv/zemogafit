const path = require("path");
module.exports = {
  ...require("./jest-common"),
  rootDir: path.join(__dirname, ".."),
  displayName: "client",
  //snapshotSerializers: ['jest-emotion'],
  testMatch: ["<rootDir>/__tests__/**/*.js", "<rootDir>/__tests__/**/*.jsx"],
};
