import $ from 'jquery';
import 'bootstrap';

export default function initMenu() {
    $('#main-navbar').on('click', 'a', function(event) {
        let scrollTop;
        let hash;

        const href = $(this).attr('href');
        if (href === 'index.html' && (window.location.pathname === '/' || window.location.pathname === '/index.html')) {
            scrollTop = 0;
            hash = '#';
        }
        else {
            const hrefMatch = href.match(/([^/]+)?#([a-z0-9-_]+)/);
            if (hrefMatch === null) {
                return;
            }
            scrollTop = $(`#${hrefMatch[2]}`).offset().top;
            hash = `#${hrefMatch[2]}`;
        }

        const $navbarCollapse = $(this).parents('.navbar-collapse');
        if ($navbarCollapse.hasClass('in') || $navbarCollapse.hasClass('collapsing')) {
            $navbarCollapse.collapse('hide');
        }

        event.preventDefault();
        $('body,html').animate({
            'scrollTop': scrollTop
        }, {
            duration: 500,
            queue: false,
            complete: function() {
                location.hash = hash;
            }
        });
    });
}
