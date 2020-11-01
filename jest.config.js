module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  watchPathIgnorePatterns: [
    "./src/adapters/secondary/test-data.json",
    "./src/adapters/secondary/app-data.json",
  ],
};
