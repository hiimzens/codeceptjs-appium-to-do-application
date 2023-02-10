exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: 'D:/internal traning/Appium/ToDoList.apk',
      platform: 'Android',
      device: 'emulator-5556'
    },
    AssertWrapper: {
      require: "codeceptjs-assert"
    }
  },
  include: {
    I: './steps_file.js',
    env: {
      TIMEOUT: 5000,
    }
  },
  mocha: {
    reporterOptions: {
      "reportDir": "output"
    },
  },
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/task-details-steps.js',
      './step_definitions/home-screen-steps.js']
  },
  plugins: {
    allure: {
      "enabled": true
    },
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
    pattern: 'wait.*',
    timeout: 0
  },
  {
    pattern: 'amOnPage',
    timeout: 0
  }
  ],
  tests: './*_test.js',
  name: 'appium'
}