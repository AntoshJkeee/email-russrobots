let gulp = require('gulp'),
  mjml = require('gulp-mjml'),
  mjmlEngine = require('mjml'),
  plumber = require('gulp-plumber'),
  // replace = require('gulp-replace'),
  rename = require('gulp-rename'),
  pug = require('gulp-pug');

var onError = require('./onError');
var paths = require('./paths');

module.exports = {
  dev: function() {
    return gulp
      .src(paths.mjml.src)
      .pipe(plumber({ errorHandler: onError }))
      .pipe(pug({pretty: true}))
      .pipe(rename({extname: '.mjml'}))
      .pipe(gulp.dest(paths.mjml.convert))
      .pipe(mjml(mjmlEngine, { validationLevel: 'strict' }))
      // .pipe(replace('http://cbr.aic.ru', ''))
      .pipe(gulp.dest(paths.mjml.dev));
  },
  prod: function() {
    return gulp
      .src(paths.mjml.src)
      .pipe(plumber({ errorHandler: onError }))
      .pipe(pug({pretty: true}))
      .pipe(rename({extname: '.mjml'}))
      .pipe(gulp.dest(paths.mjml.convert))
      .pipe(mjml(mjmlEngine, {  keepComments: false, validationLevel: 'strict' }))
      .pipe(gulp.dest(paths.mjml.prod));
  }
};
