var baseConfig = require('./karma-base.conf');

module.exports = baseConfig({
  vendor: [
    'tests/vendor/bootstrap-5.3.7.bundle.min.js'
  ],
  src: ['dist/toastbox.js', 'dist/toastbox.locales.js']
});
