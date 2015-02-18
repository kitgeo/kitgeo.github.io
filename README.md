# Сайт kitgeo.ru

## Настройка окружения в Ubuntu 14.04

1. Установить [Ruby](https://github.com/ruby/ruby) и компилятор:

        sudo apt-get install ruby ruby-dev make gcc

2. Установить [Jekyll](http://jekyllrb.com):

        sudo gem install jekyll

3. Установить [Node.js](http://nodejs.com) и [NPM](http://npmjs.com):

        sudo apt-get install nodejs npm

4. Установить глобально командный интерфейс Grunt.js через NPM:

        sudo npm install -g grunt-cli

5. Установить глобально менеджер пакетов Bower через NPM:

        sudo npm install -g bower

6. Клонировать репозиторий:

        git clone git@github.com:kitgeo/kitgeo.github.io /path/to/kitgeo

    или

        git clone https://github.com/kitgeo/kitgeo.github.io /path/to/kitgeo

7. Из корневой директории репозитория установить локально пакеты, требуемые для разработки сайта:

        cd /path/to/kitgeo
        npm install

    В результате появится директоия `node_modules`.

8. Установить библиотеки, требуемые для работы сайта, через Bower:

        bower install

## Сборка сайта

Для сборки сайта достаточно запустить из корневой директории репозитория задачу Grunt по умолчанию:

        cd /path/to/kitgeo
        grunt

В результате будет собран набор статических файлов в поддиректории `_site`. Содержимое этой директории необходимо загрузить в корневую директорию сервера.
