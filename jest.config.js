// Jest pick this file up by default
module.exports = {
  displayName: 'nofn',
  testEnvironment: 'jsdom',
  setupTestFrameworkScriptFile: require.resolve(
    './test/setup-test-framework.js'
  ),
  moduleNameMapper: {
    // module must come first
    // any loader needs this
    '\\.module\\.scss$': 'identity-obj-proxy',
    '\\.scss$': require.resolve('./test/style-mock.js')
    // can also map files that are loaded by webpack with the file-loader
  },
  // normally you'd put this here
  collectCoverageFrom: ['**/src/**/*.js']
};
