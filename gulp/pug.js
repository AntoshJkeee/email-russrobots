const gulp = require("gulp"),
	plumber = require("gulp-plumber"),
	rename = require("gulp-rename"),
	htmlbeautify = require("gulp-html-beautify"),
	pug = require("gulp-pug"),
	paths = require("./paths"),
	fs = require("fs"),
	onError = require("./onError");

let dirPages = [];
fs.readdirSync("src/pages", { withFileTypes: true })
	.filter((d) => d.isDirectory())
	.map((d) => dirPages.push(d.name));

module.exports = {
	dev: (_) => {
		gulp
			.src(paths.pug.src)
			.pipe(plumber({ errorHandler: onError }))
			.pipe(pug({ locals: { listPages: dirPages } }))
			.pipe(
				htmlbeautify({
					indent_size: 2,
					indent_char: " ",
					indent_with_tabs: true,
				})
			)
			.pipe(rename({ extname: ".html" }))
			.pipe(gulp.dest(paths.pug.dev));
		_();
	},

	prod: (_) => {
		gulp
			.src(paths.pug.src)
			.pipe(plumber({ errorHandler: onError }))
			.pipe(pug({ locals: { listPages: dirPages } }))
			.pipe(
				htmlbeautify({
					indent_size: 2,
					indent_char: " ",
					indent_with_tabs: true,
				})
			)
			.pipe(rename({ extname: ".html" }))
			.pipe(gulp.dest(paths.pug.prod));
		_();
	},
};
