var gulp = require('gulp');
var rev = require('gulp-rev');

gulp.task('copyAssets', function (){
    gulp.src([paths.build + '/assets/**/*']).pipe(gulp.dest(paths.dist + '/assets'));
    gulp.src([paths.build + '/lib/**/*']).pipe(gulp.dest(paths.dist + '/lib'));
    gulp.src([paths.build + '/favicon.ico']).pipe(gulp.dest(paths.dist));
    // gulp.src([paths.build + '/js/**/*']).pipe(gulp.dest(paths.dist + '/js')).rev();
});