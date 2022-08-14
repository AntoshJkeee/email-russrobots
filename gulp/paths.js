module.exports = {
  mjml: {
    src: 'src/pages/*.pug',
    dev: 'app/',
    prod: 'build/',
    convert: 'mjml/',
    watch: 'src/**/*.pug'
  },
  pug: {
    src: 'src/index.pug',
    dev: 'app/',
    prod: 'build/',
    watch: 'src/index.pug'
  }
};
