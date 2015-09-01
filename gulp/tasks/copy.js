import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

gulp.task('copy:fonts', () => {
	gulp
		.src('app/fonts/*')
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('copy:images', () => {
	gulp
		.src('app/images/*.{png,jpg,gif}')
		.pipe(imagemin({
			optimizationLevel: 3,
		}))
		.pipe(gulp.dest('dist/images'));
});

gulp.task('copy:js', () => {
	gulp
		.src('app/scripts/libs/*')
		.pipe(gulp.dest('dist/scripts/libs'));
});

gulp.task('copy', ['copy:fonts', 'copy:js']);
