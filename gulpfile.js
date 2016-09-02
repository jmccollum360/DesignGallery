var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    compass = require('gulp-compass'),
    browserify = require('browserify'),
    connect = require('gulp-connect'),
    webserver = require('gulp-webserver');

var sassSources = ('components/sass/*.scss');
var jsSources = [
    'components/scripts/jquery-3.1.0.min',
    'components/scripts/bootstrap.min.js'
  ];
    
     gulp.task('compass', function(){
     return gulp.src(sassSources)
      .pipe(compass({
        sass: 'components/sass',
        image: 'builds/dev/images',
        style: 'expanded'
      }))
      .pipe(gulp.dest('builds/dev/css'))
      .pipe(connect.reload())
    });

    gulp.task('js', function(){
     return gulp.src(jsSources)
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('builds/dev/js'))
      .pipe(connect.reload())
    });

    gulp.task('watch', function(){
      gulp.watch('components/sass/*.scss', ['compass']);
      gulp.watch('jsSources', ['js']);
      gulp.watch('builds/dev/*.html', ['html']);
    });

    gulp.task('connect', function(){
      connect.server({
        root: 'builds/dev/',
        livereload: true
      });
    });

    gulp.task('html', function(){
      gulp.src('builds/dev/*.html')
        .pipe(connect.reload());
    });

    gulp.task('default',['js', 'compass', 'watch', 'watch', 'connect']);
