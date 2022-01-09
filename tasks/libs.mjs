import gulp from 'gulp'
import {destinationPaths} from '../config.mjs'
import npmDist from 'gulp-npm-dist'
import rename from 'gulp-rename'

const {src, dest} = gulp

export const libsBuild = (cb) => {
  src(npmDist(), {base: './node_modules/'})
    .pipe(rename(path => {
      path.dirname = path.dirname.replace(/\/dist/, '').replace(/\\dist/, '')
    }))
    .pipe(dest(destinationPaths.libs))
  cb()
}
