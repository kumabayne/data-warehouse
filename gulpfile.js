const { dest, series, src, task, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

task('sass', function() {
  return src('./src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('bundle.css'))
    .pipe(dest('./dist/css'));
});

exports.default = function() {
  watch('./src/scss/**/*.scss', series('sass'));
};