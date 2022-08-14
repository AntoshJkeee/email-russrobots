const gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  mjml = require('./mjml'),
  paths = require('./paths');

gulp.task('mjml', mjml.dev);

module.exports = function(done) {
  return gulp.series('mjml', function () {
    gulp.watch(paths.mjml.watch).on('change', function(path) {
      gulp.series('mjml', browserSync.reload)();
    });
    browserSync.init({
      server: 'app'
    });
    done();
  })();
};
