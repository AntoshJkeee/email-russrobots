const gulp = require('gulp'),
  mjml = require('gulp-mjml'),
  mjmlEngine = require('mjml'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  htmlbeautify = require('gulp-html-beautify'),
  pug = require('gulp-pug'),
  paths = require('./paths');

var onError = require('./onError');


module.exports = {
  dev: function() {
    return gulp
      .src(paths.mjml.src)
      .pipe(plumber({ errorHandler: onError }))
      .pipe(pug())
      .pipe(
        htmlbeautify({
          indent_size: 2,
          indent_char: ' ',
          indent_with_tabs: true,
        }),
      )
      .pipe(rename({extname: '.mjml'}))
      .pipe(gulp.dest(paths.mjml.convert))
      .pipe(mjml(mjmlEngine, { validationLevel: 'strict' }))
      .pipe(gulp.dest(paths.mjml.dev));
  },

  prod: function() {
    return gulp
      .src(paths.mjml.src)
      .pipe(plumber({ errorHandler: onError }))
      .pipe(pug())
      .pipe(
        htmlbeautify({
          indent_size: 2,
          indent_char: ' ',
          indent_with_tabs: true,
        }),
      )
      .pipe(rename({extname: '.mjml'}))
      .pipe(gulp.dest(paths.mjml.convert))
      .pipe(mjml(mjmlEngine, {  keepComments: false, validationLevel: 'strict' }))
      .pipe(gulp.dest(paths.mjml.prod));
  }
};
