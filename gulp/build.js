const gulp = require('gulp'),
  mjml = require('./mjml');

gulp.task('mjml-b', mjml.prod);

module.exports = function(done) {
  return gulp.series('mjml-b',
    async function () {
      done();
    }
  )();
};
