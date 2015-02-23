(function($) {
    $(function() {
        $.stellar();
        var scrollTime = 0.15;
        var scrollDistance = 200;
        var $window = $(window);

        $window.on("mousewheel DOMMouseScroll", function(event) {
            event.preventDefault();

            var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
            var scrollTop = $window.scrollTop();
            var finalScroll = scrollTop - parseInt(delta * scrollDistance);

            var start = performance.now();
            $('html,body').animate({
                scrollTop: finalScroll
            }, {
                duration: scrollTime * 1000,
                queue: false
            });
        });
    });
})(jQuery);