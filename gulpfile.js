const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const browser_sync = require('browser-sync');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const minify = require('gulp-uglify');

// Compile SASS
gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.sass')
    .pipe(plumber())
    .pipe(sass()
    .on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browser_sync.stream());
});

// JS task
gulp.task('js', () =>
  gulp.src('src/js/**/*.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('index.min.js'))
    .pipe(minify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browser_sync.stream())
);

// Watch and Serve
gulp.task('watch', function() {

      browser_sync.init({
        server: "./"
      });

        gulp.watch("./src/sass/**/*.sass", ['sass']);
        gulp.watch("./src/js/**/*.js", ['js']);
        gulp.watch("./*.html").on('change', browser_sync.reload);
    });

// Default Task
gulp.task('default', ['watch']);