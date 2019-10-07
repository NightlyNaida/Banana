'use strict';

global.$ = {
    gulp: require('gulp'),
    pug: require('gulp-pug'),
    stylus: require('gulp-stylus'),
    csso: require('gulp-csso'),
    autoprefixer: require('gulp-autoprefixer'),
    notify: require('gulp-notify'),
    sourcemaps: require('gulp-sourcemaps'),
    browserSync: require('browser-sync').create(),
    concat: require('gulp-concat'),
    cleaner: require('gulp-clean'),
    svgSprite: require('gulp-svg-sprite'),
    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.series('images','svg'),
    $.gulp.parallel('pug','stylus','scripts-ex','script'),
    $.gulp.parallel('watch','serve')  
));

 /*$.gulp.task('getIamges', function(callback){
   var fs = require("fs");
    var files =  fs.readdirSync("src/img/");
    console.log(files);
    callback();
})*/

