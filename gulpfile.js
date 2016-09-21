/******required variables....will also need to write the uglify 
function once ready to put in production******/

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver');

// Path for all sass/scss files before conversion to single css sheet
var sassSources = ('components/sass/*.scss');   

// Path for required scripts in array to run in right sequence before concatenating to single script
var jsSources = (['components/scripts/jquery-3.1.0.min.js', 'components/scripts/bootstrap.min.js']);

// Path to development to make functions cleaner
var build =('builds/dev');  
    
    
     gulp.task('sass', function(){    //Takes all scss components and converts to css placing in dev folder
     return gulp.src(sassSources)
      .pipe(sass())
      .pipe(gulp.dest('builds/dev/css'))
    });

    gulp.task('js', function(){       //takes jquery and bootstrap required js in order and concatenates to dev folder
     return gulp.src(jsSources)
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('builds/dev/js'))
    });

    gulp.task('watch', function(){    //Anytime html, scss, or js files change run node
      gulp.watch('components/sass/*.scss', ['sass']);
      gulp.watch('jsSources', ['js']);
      gulp.watch('builds/dev/*.html', ['html']);
    });

    gulp.task('webserver', function(){  //Function to live reload after saving any changes
      gulp.src('builds/dev')
      .pipe(webserver({
        livereload: true,
        open: true
      }));
    });

    gulp.task('default',['js', 'watch', 'sass', 'webserver']);  //run with just gulp and goes through each function
