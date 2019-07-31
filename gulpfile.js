//Подключаем галп
const gulp = require('gulp');
//Объединение файлов
const concat = require('gulp-concat');
//Добапвление префиксов
const autoprefixer = require('gulp-autoprefixer');
//Оптисизация стилей
const cleanCSS = require('gulp-clean-css');
//Оптимизация скриптов
const uglify = require('gulp-uglify');
//Удаление файлов
const del = require('del');
//Для препроцессоров стилей
const sourcemaps = require('gulp-sourcemaps');
//Sass препроцессор
const sass = require('gulp-sass');
// Минификация изображений
const imagemin = require('gulp-imagemin');
//Переименовывает файлы
const rename = require("gulp-rename");
//модуль для отслеживания ошибок
const plumber = require("gulp-plumber");

const rigger = require('gulp-rigger');

const babel = require('gulp-babel');
//модуль для замены кода
const replace = require('gulp-replace');
//Синхронизация с браузером
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;


const path = {
  build: { //Тут мы укажем куда складывать готовые после сборки файлы
    html: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/img/',
    fonts: 'build/fonts/'
  },
  src: { //Пути откуда брать исходники
    html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
    js: 'src/js/**/*.js', //В стилях и скриптах нам понадобятся только main файлы
    style: 'src/css/main.scss',
    img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
    fonts: 'src/fonts/**/*.*'
  },
  watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
    html: 'src/**/*.html',
    js: 'src/js/**/*.js',
    style: 'src/css/**/*.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  clean: 'build/'
};

//Таск для очистки папки build
gulp.task('del', () => {
  return del([path.build.html])
});

//Таск для обработки стилей
gulp.task('styles', () => {
  //Шаблон для поиска файлов CSS
  //Всей файлы по шаблону './src/css/**/*.css'
  return gulp.src(path.src.style)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    //Препроцессор sass()
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(replace('url("../../', 'url("../'))
    //Объединение файлов в один
    .pipe(concat('style.css'))
    //Добавить префиксы
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    //Минификация CSS
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(rename({
      suffix: '.min'
    }))
    //Выходная папка для стилей
    .pipe(gulp.dest(path.build.css))
    .pipe(browserSync.stream());
});

//Таск для обработки скриптов
gulp.task('scripts', () => {
  //Шаблон для поиска файлов JS
  //Всей файлы по шаблону './src/js/**/*.js'
  return gulp.src(path.src.js)
    .pipe(plumber())
    .pipe(rigger())
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    //Объединение файлов в один
    .pipe(concat('index.js'))
    //Минификация JS
    .pipe(uglify({
      toplevel: true
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    //Выходная папка для скриптов
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.js))
    .pipe(browserSync.stream());
});

gulp.task('fonts', () => {
  return gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
});

gulp.task('img-compress', () => {
  return gulp.src(path.src.img)
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest(path.build.img))
});


gulp.task('html', () => {
  return gulp.src(path.src.html) //Выберем файлы по нужному пути
    .pipe(rigger()) //Прогоним через rigger
    .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
    .pipe(reload({
      stream: true
    })); //И перезагрузим наш сервер для обновлений
});

//Таск для отслеживания изменений в файлах
gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: "build/"
    },
    tunnel: true,
    notify: true
  });

  // Изменения в html
  gulp.watch(path.watch.html, gulp.series('html'));
  // Изменения шрифтов
  gulp.watch(path.watch.fonts, gulp.series('fonts'));
  // Следить за изменениями изображений
  gulp.watch(path.watch.img, gulp.series('img-compress'))
  // Следить за файлами со стилями с нужным расширением
  gulp.watch(path.watch.style, gulp.series('styles'))
  // Следить за JS файлами
  gulp.watch(path.watch.js, gulp.series('scripts'))
  // При изменении HTML запустить синхронизацию
  gulp.watch("./*.html").on('change', reload);
});

// Таск по умолчанию, Запускает del, styles, scripts и watch
gulp.task('default', gulp.series('del', gulp.parallel('html', 'styles', 'scripts', 'img-compress', 'fonts', ), 'server'));


// gulp.task("sprite", function () {
//   return gulp.src("source/img/icons/icon-build-*.svg")
//     .pipe(svgstore({
//       inlineSvg: true
//     }))
//     .pipe(rename("sprite.svg"))
//     .pipe(gulp.dest("source/img"));
// });


// gulp.task("clean:sprite", function () {
//   return del("source/img/sprite.svg");
// });
