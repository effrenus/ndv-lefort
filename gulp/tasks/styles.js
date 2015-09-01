import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import gulpif from 'gulp-if';
import errorHandler from '../errorHandler';

gulp.task('styles', () => {
	return gulp
		.src('app/styles/default.sass')
		.pipe(plumber({errorHandler}))
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false,
		}))
		.pipe(gulpif(process.env.NODE_ENV === 'production', csso()))
		.pipe(gulp.dest('dist/styles'))
		.pipe(browserSync.stream());
});
