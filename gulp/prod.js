var gulp = require('gulp');
var browserSync = require('browser-sync');

var mjml = require('./mjml');


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
