var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    compass = require('gulp-compass'),
    browserify = require('browserify'),
    webserver = require('gulp-webserver');

var sassSources = ('components/sass/*.scss');
var jsSources = [
    'components/scripts/jquery-3.1.0.min',
    'components/scripts/bootstrap.min.js'
  ]
    
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
      .pipe(browserify())
      .pipe(gulp.dest('builds/dev/js'))
    });

    gulp.task('webserver', function(){
       return gulp.src('builds/dev/')
        .pipe(webserver({
          livereload: true,
          open: true
        }));
    });

    gulp.task('watch', function(){
      gulp.watch('components/sass/*.scss', ['compass']);
      gulp.watch('jsSources', ['js']);
    });

    gulp.task('default',['compass', 'js', 'webserver']);
