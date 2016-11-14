var gulp = require('gulp');
var connet = require('gulp-connect');

gulp.task('server', function() {
  connet.server({
    root: 'app'
  })
})
