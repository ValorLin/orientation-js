var gulp = require('gulp'),
    umd = require('gulp-umd'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('default', ['build']);

gulp.task('build', function () {
    gulp.src('src/orientation.js')
        .pipe(umd())
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename('orientation.min.js'))
        .pipe(gulp.dest('dist'));
});