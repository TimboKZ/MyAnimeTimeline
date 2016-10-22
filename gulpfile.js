var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('app/ts/tsconfig.json');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    return gulp.src("app/sass/**/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        },
        open: false
    })  
});

gulp.task('useref', function() {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});

gulp.task('images', function() {
    return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean:dist', function() {
    return del.sync('dist');
});

gulp.task('cache:clear', function(callback) {
    return cache.clearAll(callback)
});

gulp.task('typescript', function() {
    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write({
            sourceRoot: '/ts',
            includeContent: false
        }))
        .pipe(gulp.dest('app/js'));
});

gulp.task('watch', ['browserSync', 'sass', 'typescript'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/ts/**/*.ts', ['typescript']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', function(callback) {
    runSequence(
        'clean:dist',
        'typescript',
        'sass',
        ['useref', 'images', 'fonts'],
        callback)
});

gulp.task('default', ['build', 'watch']);