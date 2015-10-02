var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');


gulp.task('compress', function() {
  return gulp.src('js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function() {
  return gulp.src('css/main.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('postCSS', function () { 
  var processors = [
	autoprefixer
  ];
  return gulp.src('dist/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist'));
});


gulp.task('default',['compress','minify-css','postCSS']);
