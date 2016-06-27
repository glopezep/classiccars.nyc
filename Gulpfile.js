var gulp = require('gulp')
var pug = require('gulp-pug')
var stylus = require('gulp-stylus')
var nib = require('nib')
var rename = require('gulp-rename')
var babel = require('babelify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var watchify = require('watchify')
var watch = require('gulp-watch');

function compile (watch) {
  var bundle = browserify('lib/index.js', { debug: true })

  if (watch) {
    bundle = watchify(bundle)
    bundle.on('update', function () {
      console.log('--> Bundling...')
      rebundle()
    })
  }

  function rebundle () {
    bundle
      .transform(babel, { presets: [ 'es2015' ] })
      .bundle()
      .on('error', function (err) { console.log(err); this.emit('end') })
      .pipe(source('lib/index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'))
  }

  rebundle()
}

gulp.task('pug', function () {
  return gulp.src('./lib/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(rename('index.html'))
  .pipe(gulp.dest('./public'))
})

gulp.task('styles', function () {
  return gulp.src('./lib/index.styl')
  .pipe(stylus({
    compress: true,
    use: nib()
  }))
  .pipe(rename('app.css'))
  .pipe(gulp.dest('./public'))
})

gulp.task('build', function () {
  return compile()
})

gulp.task('watch:pug', function () {
  return watch('./lib/*.pug', { ignoreInitial: false })
  .pipe(pug({
    pretty: true
  }))
  .pipe(rename('index.html'))
  .pipe(gulp.dest('./public'))
})

gulp.task('watch:styles', function () {
  return watch('./lib/index.styl', { ignoreInitial: false })
  .pipe(stylus({
    compress: true,
    use: nib()
  }))
  .pipe(rename('app.css'))
  .pipe(gulp.dest('./public'))
})

gulp.task('watch:js', function () { return compile(true) })

gulp.task('watch', ['watch:pug', 'watch:styles', 'watch:js'])

gulp.task('default', ['pug', 'styles', 'build'])
