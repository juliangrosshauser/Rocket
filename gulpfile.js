var browserSync = require('browser-sync'),
    del = require('del'),
    gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

gulp.task('html', function() {
  return gulp.src('html/index.html')
    .pipe(plugins.size({gzip: false, showFiles: true, title:'un-minified html'}))
    .pipe(plugins.size({gzip: true, showFiles: true, title:'un-minified gzipped html'}))
    .pipe(plugins.htmlmin({ collapseWhitespace: true }))
    .pipe(plugins.size({gzip: false, showFiles: true, title:'minified html'}))
    .pipe(plugins.size({gzip: true, showFiles: true, title:'minified gzipped html'}))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('sass', function() {
  return gulp.src('sass/style.scss')
    .pipe(plugins.sass({ style: "expanded" }))
    .pipe(plugins.size({gzip: false, showFiles: true, title:'un-prefixed css'}))
    .pipe(plugins.size({gzip: true, showFiles: true, title:'un-prefixed gzipped css'}))
    .pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(plugins.size({gzip: false, showFiles: true, title:'prefixed css'}))
    .pipe(plugins.size({gzip: true, showFiles: true, title:'prefixed gzipped css'}))
    .pipe(plugins.concat('style.min.css'))
    .pipe(plugins.minifyCss())
    .pipe(plugins.size({gzip: false, showFiles: true, title:'minified css'}))
    .pipe(plugins.size({gzip: true, showFiles: true, title:'minified gzipped css'}))
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
  .pipe(plugins.size({gzip: false, showFiles: true, title:'un-minified js'}))
  .pipe(plugins.size({gzip: true, showFiles: true, title:'un-minified gzipped js'}))
  .pipe(plugins.concat('script.min.js'))
  .pipe(plugins.uglify({ preserveComments: 'some', outSourceMap: false }))
  .pipe(plugins.size({gzip: false, showFiles: true, title:'minified js'}))
  .pipe(plugins.size({gzip: true, showFiles: true, title:'minified gzipped js'}))
  .pipe(gulp.dest('dist/js'))
  .pipe(browserSync.reload({ stream: true }));
});

gulp.task('img', function() {
  return gulp.src('img/*')
    .pipe(plugins.imagemin({ optimizationLevel: 7, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('clean', function(cb) {
  del('dist', cb);
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "dist"
    }
  });
});

gulp.task('default', ['clean'], function() {
  gulp.start('html', 'sass', 'js', 'img');
});

gulp.task('dev', ['browser-sync', 'default'], function() {
  gulp.watch('html/index.html', ['html']);
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('js/**/*.js', ['js']);
  gulp.watch('img/**/*', ['img']);
});
