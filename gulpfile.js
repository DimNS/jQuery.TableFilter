var gulp   = require('gulp');        // Сам Gulp JS
var uglify = require('gulp-uglify'); // Минификация JS
var rename = require('gulp-rename'); // Переименование файлов

// Сборка проекта для тестирования
gulp.task('default', function () {
    gulp.src(['src/jquery.tablefilter.js'])
        .pipe(gulp.dest('dist'));

    gulp.src(['src/jquery.tablefilter.js'])
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'));
});