var gulp = require('gulp');
var mjml = require('./mjml');

gulp.task('mjml-b', mjml.prod);

module.exports = function(done) {
  return gulp.series('mjml-b',
    async function () {
      setVersion();
      done();
    }
  )();
};
