var gulp = require('gulp');

gulp.task('watch', function (){
    return gulp.watch('./src/index.html', function(obj){
        gulp.src(obj.path)
            .pipe(gulp.dest(paths.build));
    });
});