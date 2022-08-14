const gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	htmlbeautify = require('gulp-html-beautify'),
	pug = require('gulp-pug'),
	paths = require('./paths');

var onError = require('./onError');


module.exports = {
	dev: function() {
		return gulp
			.src(paths.pug.src)
			.pipe(plumber({ errorHandler: onError }))
			.pipe(pug())
			.pipe(
				htmlbeautify({
					indent_size: 2,
					indent_char: ' ',
					indent_with_tabs: true,
				}),
			)
			.pipe(rename({extname: '.html'}))
			.pipe(gulp.dest(paths.pug.dev));
	},

	prod: function() {
		return gulp
			.src(paths.pug.src)
			.pipe(plumber({ errorHandler: onError }))
			.pipe(pug())
			.pipe(
				htmlbeautify({
					indent_size: 2,
					indent_char: ' ',
					indent_with_tabs: true,
				}),
			)
			.pipe(rename({extname: '.html'}))
			.pipe(gulp.dest(paths.pug.prod));
	}
};
