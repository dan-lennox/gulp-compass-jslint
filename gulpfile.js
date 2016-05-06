'use strict';

var gulp = require('gulp');
var compass = require('gulp-compass');

gulp.task('default', ['compass', 'watch']);

gulp.task('compass', function() {
  gulp.src('./src/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'css',
      sass: 'sass'
    }))
    .pipe(gulp.dest('temp'));
});

gulp.task('watch', function() {
  gulp.watch('./**/**/*.scss', ['compass']);
  gulp.watch('./images/**', ['compass']);
});

// @TODO:
// Add javascript linting?

// @TODO: Other linting?
