const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const svgmin = require('gulp-svgmin');
const terser = require('terser');
const gulpTerser = require('gulp-terser');
const concat = require('gulp-concat');
const include = require('gulp-html-tag-include');
const gcmq = require('gulp-group-css-media-queries');

gulp.task('server', function() {

  browserSync({
    server: {
      baseDir: "dist"
    }
  });

  gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
  return gulp.src("src/sass/**/*.+(scss|sass)")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({suffix: '.min', prefix: ''}))
    .pipe(autoprefixer())
    .pipe(gcmq())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
  gulp.watch("src/*.html").on('change', gulp.parallel('html'));
});

gulp.task('html', function () {
  return gulp.src("src/*.html")
    .pipe(include('index.html'))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist/"));
});

gulp.task('scripts', function () {
  return gulp.src('src/js/**/*.js')
    .pipe(concat('script.min.js'))
    .pipe(gulpTerser({}, terser.minify))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

gulp.task('fonts', function () {
  return gulp.src("src/fonts/**/*")
    .pipe(gulp.dest("dist/fonts"));
});

gulp.task('icons', function () {
  return gulp.src("src/icons/**/*")
    .pipe(gulp.dest("dist/icons"));
});


gulp.task('images', function () {
  return gulp.src("src/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"));
});

gulp.task('svg', function () {
  return gulp.src("src/svg/**/*")
    .pipe(svgmin())
    .pipe(gulp.dest("dist/icons/svg"));
});



gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'icons', 'html', 'images','svg'));