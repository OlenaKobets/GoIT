/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    $('.tabs_item').click(function () {
        var index = $(this).attr('data-tabindex');
        $('.tabs_item').removeClass('active');
        $(this).addClass('active');
        $('.tabs_content').hide();
        $('.tabs_content_' + index).show();
    });
});