import $ from 'jquery';

import initMenu from './initMenu';
import initFeedbackForm from './initFeedbackForm';

import '../less/index.less';

$(function() {
    $('body').removeClass('loading');
    $('.start').css('backgroundAttachment', 'scroll');
    $('.contacts').css('backgroundAttachment', 'scroll');

    initMenu();
    initFeedbackForm();
});
