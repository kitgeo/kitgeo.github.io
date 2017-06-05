# Сайт kitgeo.ru

## Настройка окружения в Ubuntu

1. Установить [Ruby](https://github.com/ruby/ruby) и компилятор:

       sudo apt-get install ruby ruby-dev make gcc

2. Установить [Jekyll](http://jekyllrb.com):

       sudo gem install jekyll

3. Установить [Node.js](http://nodejs.org) и [NPM](http://npmjs.com) одним из способов:

   - при помощи [скрипта NVM](https://github.com/creationix/nvm);
     
   - из репозиториев:

         sudo apt-get install nodejs npm

4. Клонировать репозиторий:

       git clone git@github.com:kitgeo/kitgeo.github.io /path/to/kitgeo

   или

       git clone https://github.com/kitgeo/kitgeo.github.io /path/to/kitgeo

5. Из корневой директории репозитория установить необходимые библиотеки и пакеты, требуемые для разработки сайта:

       cd /path/to/kitgeo
       npm install

   В результате появится директория `node_modules`.

## Настройка окружения в Windows 7

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

2. Скачать [инсталлятор Node.js](http://nodejs.org/) и установить Node.js вместе с [NPM](http://npmjs.com) и
добавлением в переменную окружения `PATH` (настройки по умолчанию). Проверка установки:

       node --version
       npm --version

3. Клонировать репозиторий:

       git clone git@github.com:kitgeo/kitgeo.github.io C:\path\to\kitgeo

   или

       git clone https://github.com/kitgeo/kitgeo.github.io C:\path\to\kitgeo

4. Из корневой директории репозитория установить библиотеки и пакеты, требуемые для разработки сайта:

       C:
       cd path\to\kitgeo
       npm install

   В результате появится директория `node_modules`.

## Обновление и сборка сайта

Сайт создан с использованием [Jekyll](http://jekyllrb.com), публикуется в Интернете как
[Github Pages](https://pages.github.com/) и всегда доступен по адресу [kitgeo.github.io](http://kitgeo.github.io).

Текстовые вставки оформлены в виде [Markdown](http://daringfireball.net/products/markdown/)-файлов, лежащих в
поддиректории `_includes`, и если необходимо изменить какую-то информацию, то нужно править их.

Последовательность обновления сайта следующая:

1. Внести необходимые правки, например, в Markdown-файлах.

2. Из корневой директории репозитория запустить команда на сборку:

       npm run build
        
   Если требуется пересборка с удалением всех ранее сгенерированных файлов, то вместо этой команды запустить:

       npm run rebuild        

   В результате будет осуществлена сборка кода (файлы JS, CSS, шрифты и картинки) в директорию `assets`, а затем
   будет сгенерирован набор статических файлов сайта в поддиректории `_site`. Содержимое этой директории и есть
   сайт, который будет опубликован на Github Pages.
    
   > Директория `_site` не находится под управлением git, так как после отправки очередного коммита Github Pages
   > автоматически осуществит сборку сайта Jekyll. Однако в коммите должны присутствовать пересобранные файлы
   > директории `assets` в том случае, если в процессе обновления сайта осуществлялись правки в директориях
   > `src/js`, `src/less` и `src/css-img`.
    
   Для того, чтобы сгенерированные файлы JS и CSS были минифицированы в процессе сборке, команду необходимо
   запускать с переменной окружения `NODE_ENV`, установленной в `production`:
    
       NODE_ENV=production npm run rebuild

   Для локальной разработки можно запустить веб-сервер:
    
       npm start
            
   и открыть страницу `http://localhost:4000` в браузере. Каждый раз при обнаружении изменений файлов сайт Jekyll
   будет пересобираться автоматически.
    
   Для инкрементной сборки файлов из директории `src` в директорию `assets` необходимо запустить:
    
       npm run watch:assets

3. Создать коммит, включающий все изменения после сборки:

       git add -A
       git commit -m "Some changes are made."

4. Отправить коммит в удалённый репозиторий в ветку `master`:

       git push origin master.

   В результате сайт должен обновиться в Интернете по адресу [kitgeo.github.io](http://kitgeo.github.io).
    
### Пример добавления нового продукта
    
1. Клонировать репозиторий:
    
       git clone git@github.com:kitgeo/kitgeo.github.io /path/to/kitgeo 

2. Выбрать для продукта текстовый идентификатор, например, `my-new-product` и создать для него [Markdown](http://daringfireball.net/products/markdown/)-файл
с описанием `_includes/products/my-new-product.md` в кодировке UTF-8. Для заголовка продукта использовать `###`. Пример
содержимого файла:

       ### My new product
        
       В первом абзаце идёт общее описание продукта...
        
       Можно использовать списки с описанием особенностей:
        
       - первая фича;
       - ещё одна фича;
       - много разных фич.
    
       Также **допускается** использовать любой синтаксис [Markdown](http://daringfireball.net/products/markdown/) и
       даже html, например, для вставки видео из YouTube:
        
       <div><iframe ...></iframe></div>

3. Если для продукта есть скриншоты, то их необходимо подготовить в сжатом формате для веба и положить в директорию
`assets/img/products/my-new-product`. Для детального просмотра размеры изображения должны быть не очень малы, например,
1600x900 или 1200x800. Для всех изображений также необходимо подготовить миниатюры и разместить их с идентичными именами
рядом в поддиректории `thumb`. Подготовку миниатюр легко можно сделать при помощи какого-нибудь онлайн-сервиса,
например, [Bulk Resize Photos](https://bulkresizephotos.com/). Ширина миниатюр должна быть не менее 400 пикселей.

4. В файле `products.html` добавить подключение шаблона для продукта:

       {% include product-item.html name="my-new-product" %}

5. Добавить сделанные правки в коммит:

       git add -A
       git commit -m "My new product is added."
        
6. Отправить коммит в удалённый репозиторий в ветку `master`:

       git push origin master
        
    Проверить получившийся результат на странице [kitgeo.github.io/products.html](http://kitgeo.github.io/products.html).
