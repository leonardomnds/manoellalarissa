module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: [
      'jasmine',
      '@angular-devkit/build-angular'
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-junit-reporter'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false
    },
    coverageIstanbulReporter: {
      dir: './coverage',
      reports: [ 'lcovonly', 'text-summary' ],
      fixWebpackSourcePaths: true
    },
    reporters: [
      'progress',
      'kjhtml',
      'coverage-istanbul',
      'junit'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      'Chrome'
    ],
    singleRun: false,
    junitReporter: {
      outputDir: 'coverage',
      outputFile: 'junit.xml',
      useBrowserName: false,
    }
  });
};
