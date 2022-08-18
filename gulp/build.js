const gulp = require("gulp"),
	mjml = require("./mjml"),
	pug = require("./pug"),
	del = require("del");

gulp.task("clean:build", () => {
	return del("build");
});
gulp.task("mjml-b", mjml.prod);
gulp.task("pug-b", pug.prod);

module.exports = function (done) {
	return gulp.series("clean:build", "mjml-b", "pug-b", async function () {
		done();
	})();
};
