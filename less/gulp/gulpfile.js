var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('testLess',function(){
	return gulp.src('demo.less')
			   .pipe(less())
			   .pipe(gulp.dest('dist'));
});

gulp.task('watch',function(){
	gulp.watch('*.less',['testLess']);	
	gulp.watch('./index.html',['testLess']);
})

// 启动任务
gulp.task('default',['watch'])