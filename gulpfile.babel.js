'use strict';
import gulp from 'gulp';
import babel from 'gulp-babel';
import clean from 'gulp-clean';

const paths = {
  SRC: 'src/**/*.js',
  BUILD: 'build'
};

gulp.task('clean', () => {
  gulp.src(paths.BUILD)
    .pipe(clean());
});

gulp.task('build', () => {
  gulp.src(paths.SRC)
    .pipe(babel())
    .pipe(gulp.dest(paths.BUILD));
});

gulp.task('watch', () => {
  gulp.watch(paths.SRC, ['build']);
});

gulp.task('default', ['build']);
