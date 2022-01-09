
# Инструкция по использованию сборки Gulp

- Скачать содержимое репозитория в папку gulp в корне проекта (можно с помощью degit)
```
  degit https://github.com/Semdevmaster/gulp-build-system gulp
```
- В папке gulp скорректировать config.js
- В package.json добавить блок конфига для babel (пример)

```
  "babel": {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "esmodules": true
          }
        }
      ]
    ]
  },
```

- В package.json добавить блок конфига для browserslist (пример)

```
"browserslist": [
    ">1%",
    "not dead",
    "last 2 Chrome versions",
    "last 2 Firefox versions",
    "last 2 Safari versions",
    "last 1 versions",
    "not ie <= 11",
    "not ie_mob <= 11",
    "not op_mini all",
    "not bb >= 0",
    "not and_uc >= 0",
    "not and_qq >= 0",
    "not Baidu >= 0",
    "not kaios >= 0"
  ],
```
- В package.json добавить блок со скриптами для запуска задач Gulp и др.
```
"scripts": {
    "build production": "cross-env NODE_ENV=production gulp build",
    "run development": "gulp dev",
    "css production": "cross-env NODE_ENV=production gulp stylesBuild",
    "js production": "cross-env NODE_ENV=production gulp scriptsBuild",
    "libs production": "gulp libsBuild",
    "img production": "cross-env NODE_ENV=production gulp imagesBuild",
    "sprite production": "gulp svgSpriteBuild svgSpriteCopy --series",
    "clean assets": "gulp cleanAssets",
    "list supported browsers": "npx browserslist",
    "update browser lists": "npx browserslist@latest --update-db",
    "list gulp tasks": "gulp -T"
  },
```
- В package.json добавить блок зависимостей для процесса разработки
```
"devDependencies": {
    "@babel/core": "^7.16.7",
    "@babel/preset-env": "^7.16.7",
    "@babel/register": "^7.16.7",
    "@tailwindcss/forms": "^0.4.0",
    "@tailwindcss/typography": "^0.5.0",
    "babel-loader": "^8.2.3",
    "browser-sync": "^2.27.7",
    "cross-env": "^7.0.3",
    "del": "^6.0.0",
    "gulp": "^4.0.2",
    "gulp-cached": "^1.1.1",
    "gulp-cli": "^2.3.0",
    "gulp-concat": "^2.6.1",
    "gulp-debug": "^4.0.0",
    "gulp-esbuild": "^0.10.0",
    "gulp-font2cssfontface": "github:Semdevmaster/gulp-font2cssfontface",
    "gulp-hash": "^4.2.2",
    "gulp-if": "^3.0.0",
    "gulp-newer": "^1.4.0",
    "gulp-npm-dist": "^1.0.3",
    "gulp-plumber": "^1.2.1",
    "gulp-postcss": "^9.0.1",
    "gulp-remember": "^1.0.1",
    "gulp-rename": "^2.0.0",
    "gulp-rev": "^9.0.0",
    "gulp-rev-delete-original": "^0.2.3",
    "gulp-svg-sprite": "^1.5.0",
    "postcss": "^8.4.5",
    "postcss-combine-media-query": "^1.0.1",
    "postcss-csso": "^6.0.0",
    "postcss-import": "^14.0.2",
    "postcss-preset-env": "^7.2.0",
    "sharp": "^0.29.3",
    "tailwindcss": "^3.0.12",
    "tailwindcss-pseudo-elements": "^2.0.0",
    "tailwindcss-ripple": "^0.7.1",
    "webpack": "^5.65.0",
    "webpack-stream": "^7.0.0"
  }
```
