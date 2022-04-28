import gulp from 'gulp'
import gulpDebug from 'gulp-debug'
import sharp from 'sharp'
import newer from 'gulp-newer'
import fs from 'fs'
import path from 'path'
import {destinationPaths, sourcePaths} from '../config.mjs'

const {src, dest, watch} = gulp
sharp.cache(false)

export const imagesBuild = () => {
  console.log('Copy images to the destination folder')
  return src([
      `${sourcePaths.root}img/**/*.*`,
      `!${sourcePaths.root}img/icons/*.*`,
      `!${sourcePaths.root}img/favicons/*.*`,
      `!${sourcePaths.root}img/sprite.svg`
    ],
    {base: sourcePaths.root})
    .pipe(newer(destinationPaths.img))
    .pipe(gulpDebug({title: 'Images'}))
    .pipe(dest(destinationPaths.img))
}

export const imagesWatch = () => {
  watch([
    `${sourcePaths.root}img/**/*.*`,
    `!${sourcePaths.root}img/icons/*.*`,
    `!${sourcePaths.root}img/favicons/*.*`,
    `!${sourcePaths.root}img/opengraph/*.*`,
    `!${sourcePaths.root}img/sprite.svg`
  ])
    .on('add', processAddedImage)
    .on('change', processChangedImage)
    .on('unlink', processDeletedImage)
}

async function processAddedImage(filepath) {
  if (path.extname(filepath) === '.jpg' || path.extname(filepath) === '.png') {
    console.log('Processing the added image: ', filepath)
    await makeWebp(filepath)
    await makeAvif(filepath)
    imagesBuild()
  }
  if (path.extname(filepath) === '.svg') {
    imagesBuild()
  }
}

async function processChangedImage(filepath) {
  if (path.extname(filepath) === '.jpg' || path.extname(filepath) === '.png') {
    console.log('Processing the changed image: ', filepath)
    await makeWebp(filepath)
    await makeAvif(filepath)
    imagesBuild()
  }
  if (path.extname(filepath) === '.svg') {
    imagesBuild()
  }
}

async function processDeletedImage(filepath) {
  const filePathFromSrc = path.relative(path.resolve(`${sourcePaths.root}`), filepath)
  const destFilePath = path.resolve(destinationPaths.img, filePathFromSrc)
  fs.unlinkSync(destFilePath)
  console.log(`The image ${destFilePath} is successfully deleted`)
}

/*
//todo придумать как проводить оптимизацию при добавлении
async function optimizeJpg(file) {
  const extName = path.extname(file)
  const fileName = path.basename(file, extName)
  const pathFile = path.dirname(file)
  console.log('JPG file optimization started: ', file)
  const buffer = await sharp(file).toBuffer()
  await sharp(buffer)
    .jpeg({quality: 75, chromaSubsampling: '4:2:0', progressive: true, mozjpeg: true})
    .toFile(`${pathFile}/${fileName}.jpg`)
  console.log(`File optimization completed ${file}`)
}

//todo придумать как проводить оптимизацию при добавлении
async function optimizePng(file) {
  const extName = path.extname(file)
  const fileName = path.basename(file, extName)
  const pathFile = path.dirname(file)
  console.log('PNG file optimization started: ', file)
  await sharp(file)
    .png({compressionLevel: 9})
    .toFile(`${pathFile}/${fileName}.png`)
  console.log(`File optimization completed ${file}`)
}
*/

async function makeWebp(file) {
  console.log('Converting a file to webp: ', file)
  const {dir, name} = path.parse(file)
  return sharp(file)
    .webp({
      quality: 80, smartSubsample: false, reductionEffort: 6
    })
    .toFile(`${dir}/${name}.webp`)
}

async function makeAvif(file) {
  console.log('Converting a file to avif: ', file)
  const {dir, name} = path.parse(file)
  return sharp(file)
    .avif({
      quality: 50, speed: 0, chromaSubsampling: '4:4:4'
    })
    .toFile(`${dir}/${name}.avif`)
}
