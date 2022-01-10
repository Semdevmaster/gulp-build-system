import {create as server} from 'browser-sync'
import {destinationPaths, localHostForProxy} from '../config.mjs'

export const devServer = (cb) => {
  server().init({
    host: localHostForProxy,
    proxy: {
      target: `https://${localHostForProxy}`
    },
    port: 3000,
    https: {
      cert: `${process.cwd()}/docker/nginx/ssl/default.pem`,
      key: `${process.cwd()}/docker/nginx/ssl/default-key.pem`,
    },
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
