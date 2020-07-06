module.exports = {
    coverageThreshold: {
      global: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
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
  