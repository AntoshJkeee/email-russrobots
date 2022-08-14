const gulp = require('gulp'),
  mjml = require('./mjml'),
  del = require('del');

gulp.task('clean:build', () => {
  return del('build');
});
gulp.task('mjml-b', mjml.prod);

module.exports = function(done) {
  return gulp.series('clean:build', 'mjml-b',
    async function () {
      done();
    }
  )();
};
