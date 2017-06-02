import $ from 'jquery';
import lightbox from 'lightbox2';

import initMenu from './initMenu';

import '../less/projects.less';

lightbox.option({
    albumLabel: 'Изображение %1 из %2',
});

$(function() {
    $('body').removeClass('loading');

    initMenu();
});
