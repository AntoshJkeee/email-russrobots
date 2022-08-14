const gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  mjml = require('./mjml'),
  pug = require('./pug'),
  paths = require('./paths'),
  del = require('del');

gulp.task('clean:build', () => {
  return del('build');
});
gulp.task('mjml-p', mjml.prod);
gulp.task('pug-p', pug.prod);

module.exports = function(done) {
  return gulp.series('clean:build', 'mjml-p', 'pug-p', async function () {
    gulp.watch(paths.mjml.watch, gulp.series(['mjml-p', browserSync.reload]));
		gulp.watch(paths.pug.watch, gulp.series(['pug-p', browserSync.reload]));
    browserSync.init({
      server: 'build'
    });
    done();
  })();
};
