var gulp = require('gulp');
shell = require('gulp-shell');

gulp.task('watch', function () {
    gulp.watch('./src/index.html', function (obj) {
        gulp.src(obj.path)
            .pipe(gulp.dest(paths.build));
    });
    // gulp.watch('src/ts/**/*.ts', function (obj) {
    //     return gulp.src(obj.path)
    //           .pipe(shell('tsc'))
    // });
});