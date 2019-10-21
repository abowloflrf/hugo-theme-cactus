var gulp = require("gulp")


// TODO: Download fron CDN instead of node_modules
gulp.task('lib:jQuery',function(){
  return gulp.src(['node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('./src/lib/jquery'))
})
