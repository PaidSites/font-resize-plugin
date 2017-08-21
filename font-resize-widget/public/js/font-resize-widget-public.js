(function( $ ) {
    'use strict';

    /**
     * All of the code for your public-facing JavaScript source
     * should reside in this file.
     *
     * Note: It has been assumed you will write jQuery code here, so the
     * $ function reference has been prepared for usage within the scope
     * of this function.
     *
     * This enables you to define handlers, for when the DOM is ready:
     *
     * $(function() {
     *
     * });
     *
     * When the window is loaded:
     *
     * $( window ).load(function() {
     *
     * });
     *
     * ...and/or other possibilities.
     *
     * Ideally, it is not considered best practise to attach more than a
     * single DOM-ready or window-load handler for a particular page.
     * Although scripts in the WordPress core, Plugins and Themes may be
     * practising this, we should strive to set a better example in our own work.
     */

    $(function () {

        var size_index = 0;
        var content = $('.e-content');
        var content_content = $(content).children();

        var sizes = ['fsw-large-font', 'fsw-largest-font'];

        var widget = '<div class="font-size-widget">' +
            '<span class="fsw-default">A</span>' +
            '<span class="fsw-up-one fsw-large-font">A</span>' +
            '<span class="fsw-up-two fsw-largest-font">A</span>' +
            '</div>';
        $(widget).insertBefore('.byline');

        function fswToggleSizers(selector) {
            $('.fsw-default, .fsw-up-one, .fsw-up-two').removeClass('fsw-background-color');
            $(selector).addClass('fsw-background-color');
        }

        function fswUpdateSize(selector, fontClass) {

            $(content_content).removeClass('fsw-large-font');
            $(content_content).removeClass('fsw-largest-font');

            if (sizes.includes(fontClass)) { $(content_content).addClass(fontClass); }
            fswToggleSizers(selector);
        }

        $('.fsw-default').click(function() {
            fswUpdateSize('.fsw-default', null);
        });

        $('.fsw-up-one').click(function() {
            fswUpdateSize('.fsw-up-one', 'fsw-large-font');
        });

        $('.fsw-up-two').click(function() {
            fswUpdateSize('.fsw-up-two', 'fsw-largest-font');
        });
    });

})( jQuery );