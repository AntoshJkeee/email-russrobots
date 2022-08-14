const gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  mjml = require('./mjml'),
  pug = require('./pug'),
  paths = require('./paths'),
  del = require('del');

gulp.task('clean:app', () => {
  return del('app');
});
gulp.task('mjml', mjml.dev);
gulp.task('pug', pug.dev);

module.exports = function(done) {
  return gulp.series('clean:app', 'mjml', 'pug', function () {
    gulp.watch(paths.mjml.watch).on('change', function(path) {
      gulp.series('mjml', browserSync.reload)();
    });
    browserSync.init({
      server: 'app'
    });
    done();
  })();
};
