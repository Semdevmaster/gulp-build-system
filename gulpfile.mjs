/** Change working directory **/
import path from "path";

try {
  process.chdir('../');
  console.log(`working directory has successfully been changed and now ${process.cwd()}`);
} catch (err) {
  console.error("error while changing working directory");
}

import gulp from 'gulp'
import {devServer} from './tasks/dev-server.mjs'
import {stylesBuild, stylesWatch} from './tasks/styles.mjs'
import {scriptsBuild, scriptsWatch} from './tasks/scripts.mjs'
import {libsBuild} from './tasks/libs.mjs'
import {fontsCopy, fontsBuild, fontsWatch} from './tasks/fonts.mjs'
import {imagesBuild, imagesWatch} from './tasks/images.mjs'
import {svgSpriteBuild, svgSpriteCopy, svgSpriteWatch} from './tasks/svg-sprite.mjs'
import cleanAssets from './tasks/clean-assets.mjs'
import {faviconsBuild, faviconsCopy} from './tasks/favicons.mjs'
import sharp from "sharp";

export {
  cleanAssets,
  scriptsBuild,
  stylesBuild,
  libsBuild,
  fontsBuild,
  fontsCopy,
  imagesBuild,
  svgSpriteBuild,
  svgSpriteCopy,
  faviconsBuild,
  faviconsCopy,
}

const {series, parallel} = gulp

export const build =
  series(
    svgSpriteBuild,
    parallel(
      svgSpriteCopy,
      stylesBuild,
      scriptsBuild,
      fontsCopy,
      fontsBuild,
      imagesBuild,
      faviconsCopy
    ))

export const dev = series(
  build,
  parallel(
    devServer,
    stylesWatch,
    scriptsWatch,
    fontsWatch,
    imagesWatch,
    svgSpriteWatch
  )
)
