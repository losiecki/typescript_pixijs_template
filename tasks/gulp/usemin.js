var gulp = require('gulp'),
    inject = require('gulp-inject-string'),
    usemin = require('gulp-usemin'),
    minifycss = require('gulp-minify-css'),
    minifyhtml = require('gulp-minify-html'),
    // concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev');

gulp.task('usemin', function () {

    return gulp.src('./build/index.html')
        .pipe(inject.replace('<!--// inject-->', '<!-- build:bundle js/build.js -->  <script src="js/bundle.js"></script>  <!-- endbuild -->'))
        .pipe(usemin({
            css: [minifycss(), 'concat', rev()],
            html: [minifyhtml({ empty: false })],
            bundle: [uglify({
                compress: {
                    drop_console: true
                }
            }), rev()]
        })).pipe(gulp.dest('./dist'));
});

gulp.task('bundle', function () {
    return gulp.src([paths.dist + '/*.html'])
        .pipe(usemin({
            js: [rev()]
        }))
    // .pipe(gulp.dest('dist/'));
});