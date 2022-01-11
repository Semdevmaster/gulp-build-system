import {create as server} from 'browser-sync'
import {destinationPaths, localCertFile, localCertKeyFile, localHostForProxy} from '../config.mjs'

export const devServer = (cb) => {
  server().init({
    host: localHostForProxy,
    proxy: {
      target: `https://${localHostForProxy}`
    },
    port: 3000,
    https: {
      cert: `${process.cwd()}/docker/nginx/ssl/${localCertFile}`,
      key: `${process.cwd()}/docker/nginx/ssl/${localCertKeyFile}`,
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
