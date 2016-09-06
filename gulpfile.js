var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver');

var sassSources = ('components/sass/*.scss');
var jsSources = [
    'components/scripts/jquery-3.1.0.min',
    'components/scripts/bootstrap.min.js'
  ];
var build =('builds/dev');  
    
     gulp.task('sass', function(){
     return gulp.src(sassSources)
      .pipe(sass())
      .pipe(gulp.dest('builds/dev/css'))
    });

    gulp.task('js', function(){
     return gulp.src(jsSources)
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('builds/dev/js'))
    });

    gulp.task('watch', function(){
      gulp.watch('components/sass/*.scss', ['sass']);
      gulp.watch('jsSources', ['js']);
      gulp.watch('builds/dev/*.html', ['html']);
    });

    gulp.task('webserver', function(){
      gulp.src('builds/dev')
      .pipe(webserver({
        livereload: true,
        open: true
      }));
    });

    gulp.task('html', function(){
      gulp.src('builds/dev/*.html')
   });

    gulp.task('default',['js', 'html', 'watch', 'sass', 'webserver']);
