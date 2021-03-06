var options = require('./karma.base');

options.autoWatch = false;
options.singleRun = true;
options.reporters = ['junit'];
options.junitReporter = {
  outputFile: 'dist/unit.xml'
};

module.exports = function (config) {
  config.set(options);
};
