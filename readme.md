
# Инструкция по использованию сборки Gulp

- Скачать папку gulp в корень проекта, предполагается структура папок, при которой папка gulp будет лежать рядом с папкой исходников и папкой назначения, но это можно изменить в конфиге сборки.
- В папке gulp скорректировать config.js, добавить пути до папок с исходниками и назначения, задать локальный домен для проксирования.
- В package.json добавить свойство `type` со значением `module`
```
  "type": "module",
```
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
- В package.json добавить блок со скриптами для запуска задач Gulp
```
"scripts": {
    "build production": "cross-env NODE_ENV=production gulp build -f ./gulp/gulpfile.js",
    "run development": "gulp dev -f ./gulp/gulpfile.js",
    "css production": "cross-env NODE_ENV=production gulp stylesBuild -f ./gulp/gulpfile.js",
    "js production": "cross-env NODE_ENV=production gulp scriptsBuild -f ./gulp/gulpfile.js",
    "libs production": "gulp libsBuild -f ./gulp/gulpfile.js",
    "img production": "cross-env NODE_ENV=production gulp imagesBuild -f ./gulp/gulpfile.js",
    "sprite production": "gulp svgSpriteBuild svgSpriteCopy --series -f ./gulp/gulpfile.js",
    "clean assets": "gulp cleanAssets -f ./gulp/gulpfile.js",
    "list supported browsers": "npx browserslist",
    "update browser lists": "npx browserslist@latest --update-db",
    "list gulp tasks": "gulp -f ./gulp/gulpfile.js -T"
  },
```
- В package.json добавить блок зависимостей для процесса разработки
```
"devDependencies": {
    "@babel/core": "^7.16.5",
    "@babel/preset-env": "^7.16.5",
    "@babel/register": "^7.16.5",
    "@tailwindcss/forms": "^0.4.0",
    "@tailwindcss/typography": "^0.5.0",
    "babel-loader": "^8.2.3",
    "browser-sync": "^2.27.7",
    "cross-env": "^7.0.3",
    "del": "^6.0.0",
    "gulp": "^4.0.2",
    "gulp-cached": "^1.1.1",
    "gulp-concat": "^2.6.1",
    "gulp-debug": "^4.0.0",
    "gulp-hash": "^4.2.2",
    "gulp-if": "^3.0.0",
    "gulp-imagemin": "^8.0.0",
    "gulp-newer": "^1.4.0",
    "gulp-npm-dist": "^1.0.3",
    "gulp-plumber": "^1.2.1",
    "gulp-postcss": "^9.0.1",
    "gulp-remember": "^1.0.1",
    "gulp-rename": "^2.0.0",
    "gulp-rev": "^9.0.0",
    "gulp-rev-delete-original": "^0.2.3",
    "gulp-svg-sprite": "^1.5.0",
    "gulp-webp": "^4.0.1",
    "gulp-font2cssfontface": "github:Semdevmaster/gulp-font2cssfontface",
    "postcss": "^8.4.5",
    "postcss-combine-media-query": "^1.0.1",
    "postcss-csso": "^6.0.0",
    "postcss-import": "^14.0.2",
    "postcss-preset-env": "^7.1.0",
    "tailwindcss": "^3.0.7",
    "tailwindcss-pseudo-elements": "^2.0.0",
    "tailwindcss-ripple": "^0.7.1",
    "webpack": "^5.65.0",
    "webpack-stream": "^7.0.0"
  },
```
