let gulp = require('gulp');
// let less = require('gulp-less');
let watch =  require('gulp-watch');
let path = require('path');
let minify = require('gulp-uglify'); // js压缩
let webpack = require("webpack-stream");
let SRC = 'src';
let webpackConfig = require('./webpack.config.js');
// uglify压缩
gulp.task('uglify', function() {
    return gulp.src(['./src/**/*.js','!./src/lib/**/*.js'])
        .pipe(webpack( webpackConfig))
        .on("error", function() {
            console.log(arguments)
        })
        // .pipe(minify({
        //     output: {
        //         ascii_only: true
        //     }
        // }))
        .pipe(gulp.dest('./build'))
});
gulp.task('js', function() {
    return gulp.src('./src/lib/**/*.js')
        .pipe(minify({
            output: {
                ascii_only: true
            }
        }))
        .pipe(gulp.dest('./build/lib'))
});

gulp.task('default',function() {
    gulp.start('uglify');
});

gulp.task('watch', function() {
    gulp.watch([
         './src/**/*.js'
    ],['uglify']);
});