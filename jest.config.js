module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json",
    },
  },
  setupFiles: ["./jest.setup.js"],
};
