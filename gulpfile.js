const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const stripCssComments = require('gulp-strip-css-comments');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('server', function(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch(['assets/css/style.css'],[reload])
});

gulp.task('css', function(){
  gulp.src('assets/css/style.css')
    .pipe(concat('style.min.css'))
    .pipe(stripCssComments({all: true}))
    .pipe(cssmin())
    .pipe(gulp.dest('assets/css/'))
});