'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');

var files = ['manifest.json', 'popup.html', 'background.html', 'icon-24x24.png', 'icon-48x48.png', 'icon-96x96.png', 'icon-128x128.png'];
var xpiName = 'mxsh.zip';

gulp.task('default', function () {
  gulp.src(files)
    .pipe(zip(xpiName))
    .pipe(gulp.dest('.'));
});