'use strict';

var gulp = require('gulp');
var wiredep = require('wiredep').stream;

gulp.task('bower', function () {
    return gulp.src(['layout/_partial/head.ejs','layout/_partial/after-footer.ejs'])
        .pipe(wiredep({
            ignorePath: '../../source'
        }))
        .pipe(gulp.dest('layout/_partial'));
});

gulp.task('default', ['bower'], function() {

});
