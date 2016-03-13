/*global $, jQuery*/

$(function ($) {
    'use strict';

    function toggleNav() {
        $('nav').find('ul').toggle();
    }

    // event listeners/triggers
    $('nav > span').on('click', toggleNav);
})(jQuery);
