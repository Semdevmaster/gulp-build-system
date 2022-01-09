import gulp from 'gulp'
import sharp from 'sharp'
import newer from 'gulp-newer'
import {sourcePaths, destinationPaths} from '../config.mjs'

const {src, dest} = gulp

export const faviconsBuild = (cb) => {
  const sharpStream = sharp(
    `${sourcePaths.root}img/favicons/favicon.svg`,
    {
      failOnError: false
    })
  const promises = []
  promises.push(
    sharpStream
      .clone()
      .resize(16, 16)
      .toFile(`${sourcePaths.root}img/favicons/favicon.ico`)
  )
  promises.push(
    sharpStream
      .clone()
      .resize(180, 180)
      .png()
      .toFile(`${sourcePaths.root}img/favicons/favicon-180x180.png`)
  );
  promises.push(
    sharpStream
      .clone()
      .resize(192, 192)
      .png()
      .toFile(`${sourcePaths.root}img/favicons/favicon-192x192.png`)
  );
  promises.push(
    sharpStream
      .clone()
      .resize(512, 512)
      .png()
      .toFile(`${sourcePaths.root}img/favicons/favicon-512x512.png`)
  );
  Promise.all(promises)
    .then(res => {
      console.log("Favicons is generated!");
    })
    .catch(err => {
      console.error("Error processing favicons files!", err);
    });
  cb()
}

export const faviconsCopy = (cb) => {
  src(`${sourcePaths.root}img/favicons/*.*`)
    .pipe(newer(destinationPaths.root))
    .pipe(dest(destinationPaths.root))
  cb()
}
