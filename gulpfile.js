var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    compass = require('gulp-compass'),
    gutil = require('gulp-util'),
    cssnano = require('cssnano'),
    autoprefixer = require('autoprefixer'),
    webserver = require('gulp-webserver');

var sassSrc = ('components/sass/*.scss');
var sassDest =('builds/dev/css')
var jsSources = [
    'components/scripts/jquery-3.1.0.min',
    'components/scripts/bootstrap.min.js'
  ];

  gulp.task('html', function(){
    gulp.src(dest + '*.html')
  });

    
    