var browserSync  = require('browser-sync'),
    del          = require('del'),
    gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat'),
    htmlmin      = require('gulp-htmlmin'),
    imagemin     = require('gulp-imagemin'),
    minify       = require('gulp-minify-css'),
    sass         = require('gulp-sass'),
    size         = require('gulp-size'),
    uglify       = require('gulp-uglify');

gulp.task('html', function() {
  return gulp.src('html/index.html')
    .pipe(size({gzip: false, showFiles: true, title:'un-minified html'}))
    .pipe(size({gzip: true, showFiles: true, title:'un-minified gzipped html'}))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(size({gzip: false, showFiles: true, title:'minified html'}))
    .pipe(size({gzip: true, showFiles: true, title:'minified gzipped html'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
  return gulp.src('sass/style.scss')
    .pipe(sass({ style: "expanded" }))
    .pipe(size({gzip: false, showFiles: true, title:'un-prefixed css'}))
    .pipe(size({gzip: true, showFiles: true, title:'un-prefixed gzipped css'}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(size({gzip: false, showFiles: true, title:'prefixed css'}))
    .pipe(size({gzip: true, showFiles: true, title:'prefixed gzipped css'}))
    .pipe(concat('style.min.css'))
    .pipe(minify())
    .pipe(size({gzip: false, showFiles: true, title:'minified css'}))
    .pipe(size({gzip: true, showFiles: true, title:'minified gzipped css'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('js', function() {
  return gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/velocity-animate/velocity.js',
    'node_modules/velocity-animate/velocity.ui.js',
    'js/animations.js'
  ])
  .pipe(size({gzip: false, showFiles: true, title:'un-minified js'}))
  .pipe(size({gzip: true, showFiles: true, title:'un-minified gzipped js'}))
  .pipe(concat('script.min.js'))
  .pipe(uglify({ preserveComments: 'some', outSourceMap: false }))
  .pipe(size({gzip: false, showFiles: true, title:'minified js'}))
  .pipe(size({gzip: true, showFiles: true, title:'minified gzipped js'}))
  .pipe(gulp.dest('dist/js'));
});

gulp.task('img', function() {
  return gulp.src('img/*')
    .pipe(imagemin({ optimizationLevel: 7, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('clean', function(cb) {
  del('dist', cb);
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });
});

gulp.task('default', ['clean'], function() {
  gulp.start('html', 'sass', 'js', 'img');
});

gulp.task('dev', ['browser-sync', 'default'], function() {
  gulp.watch('html/index.html', ['html', browserSync.reload]);
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('js/**/*.js', ['js', browserSync.reload]);
  gulp.watch('img/**/*', ['img', browserSync.reload]);
});
