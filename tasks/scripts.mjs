import gulp from 'gulp'
import plumber from 'gulp-plumber'
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'
import hash from 'gulp-hash'
import gulpIf from 'gulp-if'
import {sourcePaths, destinationPaths, isProduction} from '../config.mjs'

const {src, dest, watch} = gulp
const webpackConfig = () => ({
  mode: isProduction ? 'production' : 'development',
  output: {
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
    ],
  },
  resolveLoader: {
    modules: [`${process.cwd()}/gulp/node_modules`]
  },
  resolve: {
    modules: [`${process.cwd()}/gulp/node_modules`]
  },
  devtool: isProduction ? undefined : 'eval'
})

export const scriptsBuild = (cb) => {
  src(`${sourcePaths.root}js/main.js`, {base: sourcePaths.root})
    .pipe(plumber())
    .pipe(gulpWebpack(webpackConfig(), webpack))
    .pipe(gulpIf(isProduction, hash()))
    .pipe(dest(destinationPaths.assets))
    .pipe(gulpIf(isProduction, hash.manifest(`${destinationPaths.assets}assets.json`, {
      deleteOld: true,
      sourceDir: `${destinationPaths.assets}`
    })))
    .pipe(gulpIf(isProduction, dest('./')))
  cb()
}

export const scriptsWatch = () => {
  watch([
    `${sourcePaths.root}js/**/*.js`,
  ], scriptsBuild)
}
