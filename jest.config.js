module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.scss$": "<rootDir>/__mocks__/styleMock.js",
  },
};
