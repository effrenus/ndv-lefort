import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', () => {
	runSequence(
		'jade',
		// 'webpack',
		'styles',
		'browserSync',
		'watch'
		);
});

gulp.task('build', ['del'], () => {
	gulp.start(
		'styles',
		'jade',
		'scripts'
		// 'copy'
	);
});
