import del from 'del'
import {destinationPaths} from '../config.mjs'

export default () => del([
  `${destinationPaths.assets}{css,js,fonts,img}`,
  `${destinationPaths.assets}assets.json`
])
