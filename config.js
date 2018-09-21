exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  SELENIUM_PROMISE_MANAGER: 0,
  allScriptsTimeout: 30000,

  capabilities: {
    browserName: 'chrome',
    maxInstances: 1
  },

  specs: [
    './tests/demo_test1.js',
    './tests/demo_test2.js',
    './tests/demo_test3.js',
    './tests/demo_test4.js',
    './tests/demo_test5.js',
    './tests/demo_test6.js',
    './tests/demo_test7.js',
    './tests/demo_test8.js',
    './tests/demo_test9.js',
  ],

  restartBrowserBetweenTests: true,


  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 150000
  },

  framework: 'jasmine2',

  onPrepare: function () {
    let AllureReporter = require('jasmine-allure-reporter')
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'results'
    }))
    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')()
        done()
      })
    })
  }
}
