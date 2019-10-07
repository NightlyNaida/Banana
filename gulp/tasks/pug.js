module.exports = function(){
    $.gulp.task('pug',function () {
        return $.gulp.src('src/frontend/pug/index.pug')
        .pipe($.pug({
            pretty:true
        }))
        .pipe($.gulp.dest('build'))
    });
    
}
