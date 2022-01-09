import {create as server} from 'browser-sync'
import {destinationPaths, localHostForProxy} from '../config.mjs'

export const devServer = (cb) => {
  server().init({
    host: localHostForProxy,
    proxy: localHostForProxy,
    port: 3000,
    https: true,
    files: [
      `${destinationPaths.root}assets/**/*.*`,
      `${destinationPaths.root}core/elements/**/*.*`,
      `!${destinationPaths.root}assets/components/**/*.*`
    ],
    ui: false,
    open: false,
    notify: false
  })
  cb()
}
