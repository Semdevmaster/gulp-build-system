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
      cert: `${process.cwd()}/server/nginx/ssl/${localCertFile}`,
      key: `${process.cwd()}/server/nginx/ssl/${localCertKeyFile}`,
    },
    files: [
      `${destinationPaths.assets}**/*.*`,
      `${destinationPaths.root}core/app/**/*.*`,
      `!${destinationPaths.root}assets/components/**/*.*`
    ],
    ui: false,
    open: false,
    notify: false
  })
  cb()
}
