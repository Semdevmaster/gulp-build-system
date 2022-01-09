import gulp from 'gulp'
import {sourcePaths, destinationPaths} from '../config.mjs'
import newer from 'gulp-newer'
import font2cssfontface from 'gulp-font2cssfontface'
import concat from 'gulp-concat'
import fs from 'fs'
import path from 'path'

const {src, dest, watch, parallel} = gulp

export const fontsBuild = (cb) => {
  src(`${sourcePaths.root}fonts/**/*.*`)
    .pipe(font2cssfontface())
    .pipe(concat('fonts.css'))
    .pipe(dest(`${sourcePaths.root}css/modules`))
  cb()
}

export const fontsCopy = (cb) => {
  src(`${sourcePaths.root}fonts/**/*.*`)
    .pipe(newer(destinationPaths.fonts))
    .pipe(dest(destinationPaths.fonts))
  cb()
}

export const fontsWatch = () => {
  watch(`${sourcePaths.root}fonts/**/*.*`, parallel(fontsCopy, fontsBuild))
    .on('unlink', filepath => {
      const filePathFromSrc = path.relative(path.resolve(`${sourcePaths.root}fonts`), filepath)
      const destFilePath = path.resolve(destinationPaths.fonts, filePathFromSrc)
      fs.unlinkSync(destFilePath)
    })
}
