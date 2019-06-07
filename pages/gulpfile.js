const gulp = require('gulp')
const path = require('path')
const less = require('gulp-less')
const lessPluginFunctions = require('less-plugin-functions')
const browserSync = require('browser-sync').create()
const cleancss = require('gulp-cssnano')
const reload = browserSync.reload
const autoprefixer = require('gulp-autoprefixer')
const pump = require('pump')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const nodemon = require('gulp-nodemon')
const changed = require('gulp-changed')
const notify = require('gulp-notify')
// const config = require('./config')
// const port = process.env.PORT || config.port
console.log(new lessPluginFunctions())
const paths = {
  style: {
    src: '/less/**/*.less',
    dest: '/static/css/'
  },
  script: {
    src: '/js/**/*.js',
    dest: '/static/js/'
  },
  view: {
    src: 'html/**/*.html',
    dest: '/html/'
  }
}

function style(callback) {
  return pump([
    gulp.src(path.join(__dirname, paths.style.src)),
    sourcemaps.init(),
    less({
      plugins: [lessPluginFunctions]
    }),
    autoprefixer({
      browsers: [
        '>1%',
        'last 10 version',
        'iOS >= 8'
      ]
    }),
    cleancss(),
    sourcemaps.write('maps'),
    gulp.dest(path.join(__dirname, paths.style.dest)),
    reload({
      stream: true
    }),
    notify('style done')
  ], callback)
}

function script(callback) {
  return pump([
    gulp.src(path.join(__dirname, paths.script.src)),
    sourcemaps.init(),
    babel(),
    uglify(),
    sourcemaps.write('maps'),
    gulp.dest(path.join(__dirname, paths.script.dest)),
    notify('script done')
  ], callback)
}

function watch() {
  gulp.watch(path.join(__dirname, paths.style.src), style)
  gulp.watch(path.join(__dirname, paths.script.src), script)

  gulp.watch(path.join(__dirname, `${paths.style.src}/**/*.less`)).on('change', reload)
  gulp.watch(path.join(__dirname, `${paths.style.src}/**/*.js`)).on('change', reload)

  gulp.watch(path.join(__dirname, `${paths.style.dest}*.css`)).on('change', reload)
  gulp.watch(path.join(__dirname, `${paths.script.dest}*.js`)).on('change', reload)
  gulp.watch(path.join(__dirname, `${paths.view.dest}*.html`)).on('change', reload)
}

// function server() {
//   nodemon({
//     script: 'app.js'
//   })
//   browserSync.init({
//     proxy: `http://localhost:${port}`
//   })
// }

function browserTask() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
}

exports.style = style
exports.script = script
exports.watch = watch

let build = gulp.series(script, style)

// gulp.task('default', gulp.series(build, gulp.parallel(server, watch)))

gulp.task('default', gulp.series(build, gulp.parallel(browserTask, watch)))
