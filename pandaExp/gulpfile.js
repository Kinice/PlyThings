var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync').create(),
    cleancss = require('gulp-clean-css')
    reload = browserSync.reload;

gulp.task('less', function(){
    gulp.src('public/less/*.less')
        .pipe(less())
        //.pipe(cleancss())
        .pipe(gulp.dest('static/css'))
        .pipe(reload({stream:true}));
});
gulp.task('script', function(){
    gulp.src('public/js/*.js')
        .pipe(gulp.dest('static/js'));
});
gulp.task('browser-sync',['script','less'],function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('public/less/*.less',['less']);
    gulp.watch('public/less/common/*.less',['less']);
    gulp.watch('public/js/*.js',['script']);
    gulp.watch('static/css/*.css').on('change',reload);
    gulp.watch('static/js/*.js').on('change',reload);
    gulp.watch('*.html').on('change',reload);
});
gulp.task('default',['browser-sync'], function(){
    console.log('Mission Complete');
});
