var gulp = require('gulp'),
vfs = require('vinyl-fs'),
zip = require('gulp-zip'),
exec = require('child_process').exec;

module.exports.initialize = function(cb) {
  var child = exec('npm install', {cwd: './packages/spotinst/mock_api'}, function(error, stdout, stderr) {
    if (error) return cb(error);
  });

  vfs.src('./packages/spotinst/mock_api/**')
  .pipe(zip('spotinst-mockapi.zip'))
  .pipe(gulp.dest('./particles/assets'))
  .on('end', cb);
};
