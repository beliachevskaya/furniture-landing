const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const prefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const del = require('del');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

function styles() {
    return gulp.src('./src/sass/*.sass')
        .pipe(concat('styles.sass'))
        .pipe(sass())
        .pipe(prefixer({
            cascade: false
        }))
        .pipe(cleanCss({
            level: 2
        }))
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

function libsCSS() {
    return gulp.src('./src/libs/jquery-ui-1.12.1/**/*')
        .pipe(gulp.dest('./build/libs/jquery-ui'))
        .pipe(browserSync.stream());
}

function libsSlick() {
    return gulp.src('./src/libs/slick-1.8.1/**/*')
        .pipe(gulp.dest('./build/libs/slick-1.8.1'))
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src(['./src/libs/jquery-3.4.1.min.js', './src/libs/jquery-ui-1.12.1/jquery-ui.min.js', './src/libs/slick-1.8.1/slick/slick.min.js', './src/js/*.js'])
        .pipe(concat('scripts.js'))
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}

function clean() {
    return del(['build/*']);
}

function img() {
    return gulp.src('./src/img/*.png')
        .pipe(gulp.dest('./build/img'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
   
    gulp.watch('./src/sass/**/*.sass', styles);
    gulp.watch('./src/libs/**/*', libsCSS);
    gulp.watch(['./src/libs/**/*.js', './src/js/**/*.js'], scripts);
    gulp.watch('./src/img/**/*.png', img);
    gulp.watch('./*.html').on('change', browserSync.reload);
}


gulp.task('sass', styles);
gulp.task('libsCSS', libsCSS);
gulp.task('libsSlick', libsSlick);
gulp.task('scripts', scripts);
gulp.task('img', img);
gulp.task('clean', clean);
gulp.task('watch', watch);

gulp.task('build', gulp.series(clean, gulp.parallel(styles, libsCSS, libsSlick, scripts, img)));

gulp.task('dev', gulp.series('build', 'watch'));
