var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    webserver = require('gulp-webserver');

var sassSources = ('dev/components/sass/*.scss');
var jsSources =(['dev/components/scripts/jquery-3.1.0.min.js',
                 'dev/components/scripts/bootstrap.min.js'
]);

    gulp.task('sass', function(){
     return gulp.src(sassSources)
      .pipe(sass())
      .pipe(gulp.dest('dev/css'))
    });

    gulp.task('scripts', function(){
     return gulp.src(jsSources)
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('dev/js'))
    });

    gulp.task('webserver', function(){
       return gulp.src('dev/')
        .pipe(webserver({
          livereload: true,
          open: true
        }));
    });

    gulp.task('watch', function(){
      gulp.watch(sassSources, ['sass']);
    });

    gulp.task('default',['watch', 'scripts', 'webserver']);
