var gulp = require('gulp');
var build = require('./gulp/build');
var dev = require('./gulp/dev');
var prod = require('./gulp/prod');

gulp.task('default', build);

// Use for development
gulp.task('dev', dev);

// Use to build app
gulp.task('build', build);

// Use to check production build
gulp.task('prod', prod);

// // Определяем константы Gulp
// const { src, dest, parallel, series, watch } = require('gulp');
//
// // Подключаем Browsersync
// const browserSync = require('browser-sync').create();
//
// function browsersync() {
//   browserSync.init({ // Инициализация Browsersync
//     server: { baseDir: 'app/' }, // Указываем папку сервера
//     notify: false, // Отключаем уведомления
//     online: true // Режим работы: true или false
//   })
// }
//
// // Экспортируем функцию browsersync() как таск browsersync. Значение после знака = это имеющаяся функция.
// exports.browsersync = browsersync;
