module.exports = {
    coverageThreshold: {
      global: {
        statements: 98,
        branches: 91,
        functions: 98,
        lines: 98,
      },
    },
    coverageDirectory: 'coverage',
    collectCoverage: true,
    collectCoverageFrom: ['./*.js', '!jest.config.js', 'src/*.js', 'src/**/*.js', '!src/**/*.test.js', '!src/index.js'],
    coverageReporters: ['json', 'text', 'lcov'],
    moduleDirectories: ['node_modules'],
    testRegex: '.*\\.test\\.js$',
    // testResultsProcessor: './resultsProcessor',
  };
  