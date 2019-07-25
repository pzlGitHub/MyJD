var gulp = require("gulp");
// 压缩html插件
// gulp-htmlclean  下载插件 -- 取到插件
var HtmlClean = require('gulp-htmlclean');
// 压缩图片
var iamgeMin = require('gulp-imagemin');
// 压缩js
var ugLify = require('gulp-uglify');
// 去掉js中的调试语句
var debug = require('gulp-strip-debug');
// less -- css 插件
var less = require('gulp-less');
// 压缩css
var cleanCss = require('gulp-clean-css');
// 添加前缀插件  并且需要在gulp-postcss插件的参数添加autoprofixer插件并运行 
// gulp-postcss autoprefixer 插件
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
// 取文件的路径
var folder = {
    src: "src/",
    dist: "dist/"
}
// 取开发环境或者生产环境 
var devMod = process.env.NODE_ENV == "development";
// console.log(devMod);

gulp.task("html", function () {
    // 取那个文件夹下的文件
    var page = gulp.src(folder.src + "index.html")
        // 是生产环境的时候，进行压缩处理
        if(!devMod){
            page.pipe(HtmlClean())
        }
        // 输出文件路径
        page.pipe(gulp.dest(folder.dist))
});
gulp.task("image", function () {
    // 取那个文件夹下的文件
    gulp.src(folder.src + "image/*")
        .pipe(iamgeMin())
        // 输出文件路径
        .pipe(gulp.dest(folder.dist + "image/"))
});
gulp.task("css", function () {
    // 取css文件夹下的全部文件
    var page = gulp.src(folder.src + "css/*")
        .pipe(less())
        // 添加前缀
        .pipe(postcss([autoprefixer({　　//这是自动处理的参数
    　　　　　　　　                  borwsers:["last 2 versions"],　　　　
                                    //针对游览器
                    　　　　　　　　　remove:true,	
                                    // 是否美化属性值　　　　　　　　　　	
                                    cascade: true
    　　　　　　　　        })]))
        if(!devMod){
            // 压缩
            page.pipe(cleanCss());
        }
        // 输出文件路径
        page.pipe(gulp.dest(folder.dist + "css/"))
});
gulp.task("js", function () {
    // 取那个文件夹下的文件
    var page = gulp.src(folder.src + "js/*")
        if(!devMod){
            page.pipe(debug())
                .pipe(ugLify())
        }
        
        // 输出文件路径
        page.pipe(gulp.dest(folder.dist + "js/"))
});


// 任务名字，回掉函数
gulp.task('default', gulp.series(gulp.parallel('html', 'image', 'css', 'js')))
