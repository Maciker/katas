export default {
  verbose: true,
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'jsx', 'node']
};