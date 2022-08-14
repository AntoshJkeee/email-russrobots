var gulp = require('gulp');
var browserSync = require('browser-sync').create();

const mjml = require('./mjml'),
  paths = require('./paths');

gulp.task('mjml-p', mjml.prod);


module.exports = function(done) {
  return gulp.series('mjml-p', async function () {
    gulp.watch(paths.mjml.watch, gulp.series(['mjml-p', browserSync.reload]));
    browserSync.init({
      server: 'build/app'
    });
    done();
  })();
};
