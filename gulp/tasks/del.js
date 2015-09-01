import gulp from 'gulp';
import del from 'del';

gulp.task('del', function delTask(cb) {
	del('dist/**/*', cb);
});
