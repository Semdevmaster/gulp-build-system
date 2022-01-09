import gulp from 'gulp'
import {destinationPaths, sourcePaths} from '../config.mjs'
import svgSprite from 'gulp-svg-sprite'

const {src, dest, watch, series} = gulp

const config = {
  shape: {
    dimension: {
      maxWidth: 2000,
      maxHeight: 2000,
      precision: 2,
      attributes: false
    },
    spacing: {
      padding: 0,
      box: 'icon'
    },
    transform: [
      {
        svgo: {
          plugins: [
            {removeXMLNS: true},
            {removeStyleElement: true},
            {removeScriptElement: true},
            {removeOffCanvasPaths: true},
            {removeRasterImages: true},
            {convertColors: {currentColor: true}},
            {removeAttrs: {attrs: '(class)'}}
          ],
          floatPrecision: 1
        }
      }
    ]
  },
  svg: {
    xmlDeclaration: false,
    doctypeDeclaration: false,
    dimensionAttributes: false
  },
  mode: {
    stack: {
      dest: '.',
      sprite: 'img/sprite.svg',
      bust: false,
      render: {
        css: {
          template: `${sourcePaths.root}templates/icon_template.tpl`,
          dest: 'css/modules/sprite.css'
        }
      }
    }
  }
}

export const svgSpriteBuild = () => {
  return src(`${sourcePaths.root}img/icons/*.svg`)
    .pipe(svgSprite(config))
    .pipe(dest(sourcePaths.root))
}

export const svgSpriteCopy = (cb) => {
  src(`${sourcePaths.root}img/sprite.svg`)
    .pipe(dest(`${destinationPaths.img}/img`))
  cb()
}

export const svgSpriteWatch = () => {
  watch(`${sourcePaths.root}img/icons/*.svg`, series(svgSpriteBuild, svgSpriteCopy))
}
