import {deleteAsync} from 'del'
import {destinationPaths} from '../config.mjs'

export default async () => await deleteAsync([
  `${destinationPaths.assets}{css,js,fonts,img}`,
  `${destinationPaths.assets}assets.json`
])
