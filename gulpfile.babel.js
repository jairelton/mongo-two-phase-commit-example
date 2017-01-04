'use strict';
import gulp from 'gulp';
import babel from 'gulp-babel';
import clean from 'gulp-clean';

const paths = {
  SRC: 'src/**/*.js',
  DIST: 'dist'
};

gulp.task('clean', () => {
  gulp.src(paths.DIST)
    .pipe(clean());
});

gulp.task('build', () => {
  gulp.src(paths.SRC)
    .pipe(babel())
    .pipe(gulp.dest(paths.DIST));
});

gulp.task('watch', () => {
  gulp.watch(paths.SRC, ['build']);
});

gulp.task('default', ['build']);
