let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

   gulp.task('sass', function() {
       return gulp.src('app/sass/**/*.sass')
       .pipe(sass())
       .pipe(gulp.dest('app/css'))
   }) 

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.sass', ['sass']);
})   

