// 引入模块
var gulp = require('gulp');
var sass = require('gulp-sass');

// 创建编译任务
gulp.task('sass', function(){
	// 编译sass
	return gulp.src('demo.scss')
		       .pipe(sass())
		       .pipe(gulp.dest('dist'))
})

// 监听
gulp.task('watch',function(){
    gulp.watch('**.scss',['sass']);
    gulp.watch('./index.html',['sass']);
})

// 启动任务
gulp.task('default',['watch'])
