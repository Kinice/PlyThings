var gulp = require('gulp'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');


gulp.task('less', function(){
    gulp.src('public/style/*.less')
        .pipe(less())
        .pipe(minifycss())
        .pipe(gulp.dest('k-alert'));
});
gulp.task('script', function(){
    gulp.src('public/script/*.js')
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('k-alert'));
});

gulp.task('default',['less','script'], function(){
    console.log('Mission Complete');
});
