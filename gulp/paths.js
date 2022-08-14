module.exports = {
  // styles: {
  //   src: 'src/styles/main.scss',
  //   dev: 'app/common/style',
  //   prod: 'build/app/common/style',
  //   watch: ['src/styles/**/*', 'src/html/components/**/*.scss', 'src/html/page/**/*.scss']
  // },
  // stylesFull: {
  //   src: 'src/styles/*.scss',
  //   dev: 'app/common/style',
  //   prod: 'build/app/common/style',
  //   watch: 'src/styles/**/*'
  // },
  // templates: {
  //   src: 'src/html/*.pug',
  //   dev: 'app/',
  //   prod: 'build/app/',
  //   watch: 'src/html/**/*.pug'
  // },
  mjml: {
    src: 'src/mjml/*.pug',
    dev: 'app/',
    prod: 'build/app/',
    convert: 'src/html/',
    watch: ['src/mjml/*.pug', 'src/html/layouts/email/*.pug']
  },
  // scripts: {
  //   src: 'src/scripts/*.js',
  //   dev: 'app/common/scripts',
  //   prod: 'build/app/common/scripts',
  //   watch: 'src/scripts/*'
  // },
  // scriptsFull: {
  //   src: 'src/scripts/*.js',
  //   dev: 'app/common/scripts',
  //   prod: 'build/app/common/scripts',
  //   watch: 'src/scripts/*'
  // },
  // static: {
  //   src: 'src/static/**/*.*',
  //   dev: 'app/common',
  //   prod: 'build/app/common',
  //   watch: 'src/static/**/*'
  // }
};
