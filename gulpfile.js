const gulp = require('gulp'),
 del = require('del'),
 requiredir  = require('require-dir');
 runseq = require('run-sequence');

global.paths = {
    current: '',
    src: './src',
    dist: './dist',
    build: './build',
};

requiredir('./tasks/gulp', { recurse: true });

// gulp.task('default', ['src','server', 'watch', "open"]);

gulp.task('dist', ['clean'], function (done) {
    paths.current = "dist";
    runseq('copyAssets','images', done); 
});
