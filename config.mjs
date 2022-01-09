/** Путь до папки с исходниками **/
const baseSourcePath = './src/'

/** Путь до папки назначения **/
const baseDestinationPath = './www/'

/** Конфиг с путями до папок с файлами, используется в задачах **/
const config = {
  sourcePaths: {
    root: baseSourcePath //Корень исходников
  },
  destinationPaths: {
    root: baseDestinationPath, //Корень назначения
    html: `${baseDestinationPath}/core/elements/`, //Путь до файлов разметки
    css: `${baseDestinationPath}/assets/css/`, //Путь до файлов стилей
    js: `${baseDestinationPath}/assets/js/`, //Путь до файлов скриптов
    img: `${baseDestinationPath}/assets/`, //Путь до файлов с картинками (только интерфейсные)
    libs: `${baseDestinationPath}/assets/libs/`, //Путь до файлов библиотек
    fonts: `${baseDestinationPath}/assets/fonts/`, //Путь до файлов шрифтов
    assets: `${baseDestinationPath}/assets/`, //Путь до папки со всеми файлами фронта (ассетами)
  },
  isProduction: process.env.NODE_ENV === 'production', //Определяет режим сборки - разработка или продакшн
  localHostForProxy: 'gulp-new.loc' //Локальный домен для разработки
}

export const {isProduction, sourcePaths, destinationPaths, localHostForProxy} = config
