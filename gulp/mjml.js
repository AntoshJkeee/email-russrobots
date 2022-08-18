const gulp = require("gulp"),
	mjml = require("gulp-mjml"),
	mjmlEngine = require("mjml"),
	plumber = require("gulp-plumber"),
	rename = require("gulp-rename"),
	htmlbeautify = require("gulp-html-beautify"),
	pug = require("gulp-pug"),
	paths = require("./paths"),
	fs = require("fs");

var onError = require("./onError");

let dirPages = [];
fs.readdirSync("src/pages", { withFileTypes: true })
	.filter((d) => d.isDirectory())
	.map((d) => dirPages.push(d.name));

module.exports = {
	dev: (_) => {
		dirPages.forEach((dirPage) => {
			gulp
				.src(`src/pages/${dirPage}/*.pug`)
				.pipe(plumber({ errorHandler: onError }))
				.pipe(pug())
				.pipe(
					htmlbeautify({
						indent_size: 2,
						indent_char: " ",
						indent_with_tabs: true,
					})
				)
				.pipe(rename({ extname: ".mjml" }))
				.pipe(gulp.dest(paths.mjml.convert))
				.pipe(mjml(mjmlEngine, { validationLevel: "strict" }))
				.pipe(gulp.dest(paths.mjml.dev));
		});
		_();
	},

	prod: (_) => {
		dirPages.forEach((dirPage) => {
			gulp
				.src(`src/pages/${dirPage}/*.pug`)
				.pipe(plumber({ errorHandler: onError }))
				.pipe(pug())
				.pipe(
					htmlbeautify({
						indent_size: 2,
						indent_char: " ",
						indent_with_tabs: true,
					})
				)
				.pipe(rename({ extname: ".mjml" }))
				.pipe(gulp.dest(paths.mjml.convert))
				.pipe(mjml(mjmlEngine, { keepComments: false, validationLevel: "strict" }))
				.pipe(gulp.dest(paths.mjml.prod));
		});
		_();
	},
};
