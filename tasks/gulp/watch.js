var gulp = require('gulp');
shell = require('gulp-shell');

gulp.task('watch', function () {
    gulp.watch('./src/index.html', function (obj) {
        console.log("watch html");
        gulp.src(obj.path)
            .pipe(gulp.dest(paths.build));
    });
    gulp.watch('src/ts/**/*.ts', function (obj) {
        console.log("watch TS" + obj.path);
        return gulp.src(obj.path)
              .pipe(shell('npm run tsc'))
    });
});