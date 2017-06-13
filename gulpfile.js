var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('uglify', function(){
	return gulp.src('./js/*.js')
			   .pipe(concat('main.js'))
			   .pipe(uglify({
				   mangle: { 
					   /*压缩顶级作用域中的声明变量,default false(mangle names declared in the top level scope)*/
					   toplevel: true,
					   /*保留的关键字(变量名称,不压缩),default[]*/
					   reserved: ['foo'],
					   /*
						不压缩函数名,default false(Pass true to not mangle function names. Useful for code relying on) 
						function printName(){}:printName不会被压缩
						var myFuc = function printName(){}:这样的printName会被压缩成类似var n=function(){}
					   */
					   keep_fnames: true
					},
				   compress: true
				}))
			   .pipe(gulp.dest('build'));
});

gulp.task('clean', function(){
	
});
gulp.task('default', function(){
	gulp.watch('js/*.js', ['uglify']);
});
