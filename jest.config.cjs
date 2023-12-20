module.exports = {
  preset: 'ts-jest',
  transform: {'^.+\\.ts?$': 'ts-jest'},
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['dotenv/config'],
  moduleNameMapper: {
     "^models/(.*)": "<rootDir>/src/models/$1",
     "^consts": "<rootDir>/src/consts",
     "^errors": "<rootDir>/src/errors",
     "^decorators": "<rootDir>/src/decorators",
     "^validators": "<rootDir>/src/validators",
     "^helpers": "<rootDir>/src/helpers",
  }
}
