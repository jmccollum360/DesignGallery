var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    compass = require('gulp-compass'),
    gutil = require('gulp-util'),
    cssnano = require('cssnano'),
    autoprefixer = require('autoprefixer'),
    webserver = require('gulp-webserver');

var sassSources = ('components/sass/*.scss');
var jsSources = [
    'components/scripts/jquery-3.1.0.min',
    'components/scripts/bootstrap.min.js'
  ];
    
     gulp.task('default', function(){
       return gutil.log('gulp running')
     });

     gulp.task('compass', function(){
     return gulp.src(sassSources)
      .pipe(compass({
        sass: 'components/sass',
        image: 'builds/dev/images',
        style: 'expanded'
      }))
      .pipe(gulp.dest('builds/dev/css'))
    });

    gulp.task('js', function(){
     return gulp.src(jsSources)
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('builds/dev/js'))
    });

    gulp.task('html', function(){
      gulp.src(dest + '*.html');
    });

