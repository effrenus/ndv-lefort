import gutil from 'gulp-util';

module.exports = function errorHandler(error) {
	gutil.log([
		(error.name + ' in ' + error.plugin).bold.red,
		'',
		error.message,
		'',
	].join('\n'));

	this.emit('end');
};
