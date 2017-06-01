import $ from 'jquery';
import 'bootstrap';
import 'jquery.stellar';
import 'jquery-form-validator';

import '../less/kitgeo.less';

const enableParallax = false;

if (enableParallax) {
    $(window).on('load', function() {
        $('body').removeClass('loading');
        $.stellar({
            horizontalScrolling: false
        });
    }).on('resize', function() {
        $.stellar('refresh');
    });
}

$(function() {
    if (!enableParallax) {
        $('body').removeClass('loading');
        $('[data-stellar-background-ratio]').css('backgroundAttachment', 'scroll');
    }

    // Navbar anchors
    $('#main-navbar').on('click', 'a', function(event) {
        const href = $(this).attr('href');
        if (!href.match(/^#/) && !$(this).hasClass('navbar-brand')) {
            return;
        }

        const scrollTop = $(this).hasClass('navbar-brand') ? 0 : $(href).offset().top;
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
                location.hash = href;
            }
        });
    });

    // Feedback form
    let validationResult = false;
    let submitting = false;

    const $feedbackForm = $('.feedback-form');

    $.validate({
        modules: 'security',
        onValidate: function() {
            $feedbackForm.find('.form-submit-error').remove();
        },
        onSuccess: function() {
            validationResult = true;
        },
        onError: function() {
            validationResult = false;
        }
    });

    $feedbackForm.on('submit', function(event) {
        event.preventDefault();

        if (submitting || !validationResult) {
            return;
        }

        const url = $(this).attr('action').replace(/\/messages/, '/messages/ajax');
        const data = {};
        $.each($(this).serializeArray(), function(index, item) {
            data[item.name] = item.value;
        });

        var onSubmitFail = function() {
            $feedbackForm.find('.form-group:first').before($('<div></div>')
                .addClass('form-submit-error')
                .addClass('alert')
                .addClass('alert-danger')
                .addClass('alert-dismissible')
                .append($('<button></button>')
                    .addClass('close')
                    .attr('type', 'button')
                    .attr('data-dismiss', 'alert')
                    .attr('aria-label', 'Закрыть')
                    .append($('<span></span>')
                        .attr('aria-hidden', 'true')
                        .html('&times;')
                    )
                )
                .append($('<span></span>')
                    .text('Не удалось отправить форму. Попробуйте повторить попытке позднее.')
                )
            )
        };

        $.ajax({
            dataType: 'jsonp',
            url: url,
            data: data,
            beforeSend: function() {
                submitting = true;
            }
        }).done(function(data) {
            if (!data.success) {
                onSubmitFail();
                return;
            }

            $feedbackForm.replaceWith($('<div></div>')
                .addClass('form-submit-success')
                .addClass('alert')
                .addClass('alert-success')
                .addClass('alert-dismissible')
                .append($('<button></button>')
                    .addClass('close')
                    .attr('type', 'button')
                    .attr('data-dismiss', 'alert')
                    .attr('aria-label', 'Закрыть')
                    .append($('<span></span>')
                        .attr('aria-hidden', 'true')
                        .html('&times;')
                    )
                )
                .append($('<span></span>')
                    .text('Большое спасибо за Ваше сообщение. Мы свяжемся с Вами в ближайшее время.')
                )
            );
        }).fail(function() {
            onSubmitFail();
        }).always(function() {
            submitting = false;
        });
    });
});
