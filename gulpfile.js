const gulp = require('gulp'),
  build = require('./gulp/build'),
  dev = require('./gulp/dev'),
  prod = require('./gulp/prod');

gulp.task('default', build);

// Use for development
gulp.task('dev', dev);

// Use to build app
gulp.task('build', build);

// Use to check production build
gulp.task('prod', prod);
