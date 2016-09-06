var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    cssnano = require('cssnano'),
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

    
    