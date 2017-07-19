/*
* @Author: Administrator
* @Date:   2017-07-19 11:34:31
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-19 14:53:42
*/

'use strict';
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var cssnano = require('gulp-cssnano');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  // console.log("kx");
  gulp.src('yuancss/*.html')
  // .pipe(jade())
  // .pipe(minify())
  .pipe(gulp.dest('css/'));


});
  gulp.task('zx', function() {
  // 将你的默认的任务代码放在这
//更新到文件夹，执行调用的方法名称
  	gulp.watch('yuancss/*.html', ['default']);
  	gulp.watch('yuancss/*.less', ['less']);
});
  gulp.task('less', function () {
   return gulp.src('yuancss/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('css/'));
});