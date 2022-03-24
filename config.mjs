/** Версия файлов для фронта (тема) **/
const assetsVersionPrefix = 'v1'

/** Путь до папки с исходниками **/
const baseSourcePath = './src/'

/** Путь до папки назначения **/
const baseDestinationPath = './app/'

/** Конфиг с путями до папок с файлами, используется в задачах **/
const config = {
  sourcePaths: {
    root: baseSourcePath //Корень исходников
  },
  destinationPaths: {
    root: baseDestinationPath, //Корень назначения
    css: `${baseDestinationPath}/assets/${assetsVersionPrefix}/css/`, //Путь до файлов стилей
    js: `${baseDestinationPath}/assets/${assetsVersionPrefix}/js/`, //Путь до файлов скриптов
    img: `${baseDestinationPath}/assets/${assetsVersionPrefix}/`, //Путь до файлов с картинками (только интерфейсные)
    libs: `${baseDestinationPath}/assets/${assetsVersionPrefix}/libs/`, //Путь до файлов библиотек
    fonts: `${baseDestinationPath}/assets/${assetsVersionPrefix}/fonts/`, //Путь до файлов шрифтов
    assets: `${baseDestinationPath}/assets/${assetsVersionPrefix}/`, //Путь до папки со всеми файлами фронта (ассетами)
  },
  isProduction: process.env.NODE_ENV === 'production', //Определяет режим сборки - разработка или продакшн
  localHostForProxy: 'gulp-build-system.loc', //Локальный домен для разработки
  localCertFile: 'gulp-build-system.loc.pem', //Имя файла сертификата
  localCertKeyFile: 'gulp-build-system.loc-key.pem', //Имя файла с ключем сертификата
  tailwindcssConfigName: `tailwind.config.${assetsVersionPrefix}.js`
}

export const {
  isProduction,
  sourcePaths,
  destinationPaths,
  localHostForProxy,
  localCertFile,
  localCertKeyFile,
  tailwindcssConfigName
} = config
