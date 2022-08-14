var gulp = require('gulp');
var browserSync = require('browser-sync').create();
// var htmlInjector = require('bs-html-injector');

// var sass = require('./sass');
// // var sassIE9 = require('./sass-ie9');
// var fonts = require('./fonts');
// var templates = require('./templates');
var mjml = require('./mjml');
// var scripts = require('./scripts');
// var vendor = require('./vendor');
// var images = require('./images');
var paths = require('./paths');
// var staticTask = require('./static');

// gulp.task('styles', sass.dev);
// // gulp.task('styles-ie9', sassIE9.dev);
// gulp.task('fonts', fonts.dev);
// gulp.task('templates', templates.dev);
gulp.task('mjml', mjml.dev);
// gulp.task('scripts', scripts.dev);
// gulp.task('vendor', vendor.dev);
// gulp.task('images', images.dev);
// gulp.task('static', staticTask.dev);
// function clearCache (path, historyPaths) {
//   templates.cache[path] = undefined;
//   historyPaths = historyPaths || [];
//   var clearPaths = [];
//   var realPath = path.replace(/\\/g, '\\\\');
//   Object.keys(templates.cache).forEach(function (key) {
//     if (!templates.cache[key] || !templates.cache[key].astText || historyPaths.includes(key)) return;
//     if (templates.cache[key].astText.includes(realPath)) {
//       historyPaths.push(key);
//       clearPaths.push(key);
//     }
//   });
//   clearPaths.forEach(function (path) {
//     clearCache(path, historyPaths);
//   });
// }
// function updateHtml (path) {
//   clearCache(path);
//   gulp.series('templates', browserSync.reload)();
// }
//
//
// module.exports = function(done) {
//   return gulp.series('styles', 'scripts', /* 'styles-ie9', */ 'fonts', 'templates', 'mjml', 'vendor', 'static', 'images', function () {
//     gulp.watch(paths.styles.watch, gulp.series(['styles'/*,  'styles-ie9' */])); // auto reload by browserSync.stream() inside task
//     gulp.watch(paths.fonts.watch, gulp.series(['fonts', browserSync.reload]));
//     gulp.watch(paths.templates.watch).on('change', function(path) {updateHtml(path);});
//     gulp.watch(paths.mjml.watch).on('change', function(path) {
//       gulp.series('mjml', browserSync.reload)();
//       updateHtml(path);
//     });
//     gulp.watch(paths.scripts.watch, gulp.series(['scripts']));
//     gulp.watch(paths.static.watch, gulp.series(['static', browserSync.reload]));
//     gulp.watch(paths.vendor.watch, gulp.series(['vendor', browserSync.reload]));
//     gulp.watch(paths.images.watch, gulp.series(['images', browserSync.reload]));
//     // init server
//     // browserSync.use(htmlInjector);
//     browserSync.init({
//       server: 'app'
//     });
//     done();
//   })();
// };

module.exports = function(done) {
  return gulp.series('mjml', function () {
    gulp.watch(paths.mjml.watch).on('change', function(path) {
      gulp.series('mjml', browserSync.reload)();
      updateHtml(path);
    });
    browserSync.init({
      server: 'app'
    });
    done();
  })();
};
