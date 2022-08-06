var gulp = require('gulp');
var mjml = require('gulp-mjml');
var mjmlEngine = require('mjml');
var plumber = require('gulp-plumber');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var pug = require('gulp-pug');

// module.exports = {
// 	dev: function() {
// 		return gulp
// 			.src(paths.mjml.src)
// 			.pipe(plumber({ errorHandler: onError }))
// 			.pipe(pug({pretty: true}))
// 			.pipe(rename({extname: '.mjml'}))
// 			.pipe(gulp.dest(paths.mjml.convert))
// 			.pipe(mjml(mjmlEngine, { validationLevel: 'strict' }))
// 			// .pipe(replace('http://cbr.aic.ru', ''))
// 			.pipe(gulp.dest(paths.mjml.dev));
// 	},
// 	prod: function() {
// 		return gulp
// 			.src(paths.mjml.src)
// 			.pipe(plumber({ errorHandler: onError }))
// 			.pipe(pug({pretty: true}))
// 			.pipe(rename({extname: '.mjml'}))
// 			.pipe(gulp.dest(paths.mjml.convert))
// 			.pipe(mjml(mjmlEngine, {  keepComments: false, validationLevel: 'strict' }))
// 			.pipe(gulp.dest(paths.mjml.prod));
// 	}
// };