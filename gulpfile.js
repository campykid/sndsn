var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var watch = require('gulp-watch');
var connect = require('gulp-connect');


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

gulp.task('postCSS', ['minify-css'], function () { 
  var processors = [
	autoprefixer
  ];
  return gulp.src('dist/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist'));
});


gulp.task('watch', function(){
 connect.server({
    root: './',
    livereload: true
  });
  gulp.watch(['./*', './css/*.css', './js/*.js'], ['default', 'liveReload' ])

});

gulp.task('liveReload', function(){
  gulp.src('./*')
   .pipe(connect.reload());
})



gulp.task('default',['compress','postCSS']);

