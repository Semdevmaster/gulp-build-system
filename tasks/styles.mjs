import gulp from 'gulp'
import plumber from 'gulp-plumber'
import postcss from 'gulp-postcss'
import gulpIf from 'gulp-if'
import hash from 'gulp-hash'
import postcssImport from 'postcss-import'
import tailwindcss from 'tailwindcss'
import postcssPresetEnv from 'postcss-preset-env'
import csso from 'postcss-csso'
import postCssCombineMediaQuery from 'postcss-combine-media-query'
import {sourcePaths, destinationPaths, isProduction} from '../config.mjs'

const {src, dest, watch} = gulp

export const stylesBuild = (cb) => {
  const plugins = [
    postcssImport({path: [`${sourcePaths.root}css`, 'gulp/node_modules']}),
    tailwindcss({config: `${process.cwd()}/gulp/tailwind.config.js`}),
    postcssPresetEnv({stage: 2, features: {'nesting-rules': true}, autoprefixer: {cascade: false}}),
    ...(isProduction ? [csso({restructure: false, comments: false})] : []),
    ...(isProduction ? [postCssCombineMediaQuery()] : [])
  ]
  src(`${sourcePaths.root}css/style.css`,
    {
      sourcemaps: !isProduction,
      base: sourcePaths.root
    })
    .pipe(plumber())
    .pipe(postcss(plugins))
    .pipe(gulpIf(isProduction, hash()))
    .pipe(dest(destinationPaths.assets, {sourcemaps: !isProduction}))
    .pipe(gulpIf(isProduction, hash.manifest(`${destinationPaths.root}assets/assets.json`, {
      deleteOld: true,
      sourceDir: `${destinationPaths.root}assets`
    })))
    .pipe(gulpIf(isProduction, dest('./')))
  cb()
}

export const stylesWatch = () => {
  watch([
    `${sourcePaths.root}css/**/*.css`,
    `${sourcePaths.root}js/**/*.js`,
    `${destinationPaths.root}core/elements/**/*.tpl`,
    './gulp/tailwind.config.cjs',
  ], stylesBuild)
}
