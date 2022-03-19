const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename"); 
const autoprefixer = require('gulp-autoprefixer'); 
const cleanCSS = require('gulp-clean-css'); //підключаємо встановлені пакети в проекті до цього файлу

// Static server створюємо простий браузер сервер
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(sass|scss)")  //вказуємо що всі файли в папці src/sass буть то в форматф sass чи scss будуть компілюватись
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))   //компілюємо файли
        .pipe(rename({
            prefix: "",
            suffix: ".min",      //добавляю у прокомпільовані sass файли суфікс min.css
            })) 
        .pipe(autoprefixer({
			cascade: false
		    }))                        //добавляє автопрефікси -webkit- автоматично
        .pipe(cleanCSS({compatibility: 'ie8'}))   //файл очищається
		.pipe(gulp.dest('dist'))                  
        .pipe(gulp.dest("src/css")) //скомпільовані файли поміщаємо в папку src/css
        .pipe(browserSync.stream()); //перезапускаємо локальний сервер
});

gulp.task('watch', function () {
    gulp.watch("src/sass/*.+(sass|scss)", gulp.parallel("styles"));   //перевіряємо чи змінились файли, якщо так то запускаємо наш таск styles
    gulp.watch("src/*.html").on("change", browserSync.reload);   //перевіряємо чи змінився контрийсь з файлів html, якщо так то перезапускаємо сервер 
});


gulp.task('default', gulp.parallel('watch', 'server', 'styles')); //вказуємо що подефолту будуть запускатись всі ці таски, що описані вище