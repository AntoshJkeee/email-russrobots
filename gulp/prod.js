const gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  mjml = require('./mjml'),
  paths = require('./paths'),
  del = require('del');

gulp.task('clean:build', () => {
  return del('build');
});
gulp.task('mjml-p', mjml.prod);

module.exports = function(done) {
  return gulp.series('clean:build', 'mjml-p', async function () {
    gulp.watch(paths.mjml.watch, gulp.series(['mjml-p', browserSync.reload]));
    browserSync.init({
      server: 'build/app'
    });
    done();
  })();
};
