var gulp        = require('gulp');
var path        = require('path');
var readdir     = require('readdir');
var sequence    = require('run-sequence');

var cfg = {
  production: process.argv.indexOf('all') !== -1,
  srcdir: './src',
  distdir: './dist'
};

//load gulp tasks
var taskDir = path.join(__dirname, 'tasks');
var taskFiles = readdir.readSync(taskDir, ['**.js']);
taskFiles.forEach(function(taskFile) {
  require(path.join(taskDir, taskFile))(cfg);
});

gulp.task('build', function(done) {
  sequence("scripts.lint", ["scripts.bundle","styles.bundle","content.build"], done);
});

gulp.task('test', function(done) {
  sequence("scripts.test", done);
});

gulp.task('debug', function(done) {
  sequence("scripts.debug", done);
});

gulp.task('optimise', function(done) {
  sequence(["scripts.optimise","styles.optimise","images.optimise"], "cachebust", done);
});

gulp.task('watch', function(done) {
  sequence(["packages.watch","scripts.watch","styles.watch","content.watch"], done);
});

gulp.task('default', function(done) {
  sequence("build", done);
});

gulp.task('all', function(done) {
  sequence("clean", "build", ["test","optimise"], done);
});
