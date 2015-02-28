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

8. Установить библиотеки, требуемые для работы сайта, через Bower (в том случае, если они ещё не установлены в
директорию `src/lib`:

        bower install

# Настройка окружения в Windows 7

1. Установить [Jekyll на Windows](http://jekyllrb.com/docs/windows/), придерживаясь
[следующей инструкции](http://jekyll-windows.juthilo.com/).

    - Скачать [инсталлятор Ruby и Development Kit](http://rubyinstaller.org/downloads/) нужной архитектуры.
    В ходе процесса установки не забыть добавить Ruby в переменную окружения `PATH`. Проверить установку можно в
    консоли:

        ruby --version

    Исполняемый файл Development Kit является самораспаковывающимся архивом - при распаковке важно задать путь
    без пробелов, например, `C:\RubyDevKit`. После распаковки архива из директории под правами администратора запустить:

        cd C:\RubyDevKit
        ruby dk.rb init
        ruby dk.rb install

    - Установить Jekyll:

        gem install jekyll

    В случае возникновения ошибки вида:

        > ERROR:  Could not find a valid gem 'jekyll' (>= 0), here is why:
        >          Unable to download data from https://rubygems.org/ -
        > SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B:
        > certificate verify failed (https://api.rubygems.org/latest_specs.4.8.gz)

    прописать источник пакетов по протоколу `http` вместо `https` (очень важно не забыть замыкающий слеш в ссылках):

        gem sources --remove https://rubygems.org/
        gem sources -a http://rubygems.org/
        gem install jekyll

    Проверка установки:

        jekyll --version

2. test.

## Обновление и сборка сайта

Сайт создан с использованием [Jekyll](http://jekyllrb.com) и публикуется в Интернете как
[Github Pages](https://pages.github.com/).

Текстовые вставки оформлены в виде [Markdown](http://daringfireball.net/projects/markdown/)-файлов, лежащих в
поддиректории `_includes`, и если необходимо изменить какую-то информацию, то нужно править их.

Последовательность обновления сайта следующая:

1. Вносятся необходимые правки, например, в Markdown-файлах.

2. Пересобирается сайт [командой Grunt умолчанию](http://gruntjs.com/creating-tasks), запускаемой из корневой
директории репозитория:

        cd /path/to/kitgeo
        grunt

    Будет подготовлен набор статических файлов в поддиректории `_site`. Содержимое этой директории
и есть контент сайта, который необходимо загрузить на сервер. Для локальных тестов можно поднять любой веб-сервер,
умеющий отдавать статические файлы, и настроить его корень на поддиректорию `_site`. В качестве альтернативного
варианта можно воспользоваться задачей Grunt, которая будет слушать http-соединения на 7999-м порте:

        grunt server

    Для удобства локальных сборок и тестов можно запустить задачу Grunt, которая поднимет веб-сервер
(по аналогии с `grunt server`) и будет следить за изменениями исходных файлов:

        grunt run

    Каждый раз при обнаружении изменений файлов
будет автоматически запускаться задача сборки сайта `grunt`.

3. Создаётся коммит, включающий все изменения после сборки:

        git add -A
        git commit -m "Some changes are made."

4. Отправляется коммит в удалённый репозиторий в ветку `master`:

        git push origin master.

    В результате сайт должен обновиться в Интернете.

## Задачи Grunt

- `grunt` или `grunt build` - полностью собрать сайт (последовательное выполнение задач `copy`, `css`, `js`, `jekyll`);
- `grunt copy` - копирует необходимые для сайта шрифты и изображения в поддиректорию `assets`;
- `grunt css` - скомпилировать LESS в CSS;
- `grunt js` - проверить качество JavaScript-кода и минимизировать его в один файл;
- `grunt jekyll` - собрать статические HTML-файлы сайта при помощи Jekyll;
- `grunt server` - запускает локальный веб-сервер для отдачи статических файлов из поддиректории `_site` на 7999-м порте;
- `grunt watch` - полностью собирает сайт, запускает локальный веб-сервер и следит за изменениями исходных кодов с
целью автоматической пересборки сайта.

TODO: реализовать `grunt clean` и `grunt rebuild`.