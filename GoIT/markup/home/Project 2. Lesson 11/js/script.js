/**
 * Created by Пользователь on 24.09.2015.
 */
$(function(){
    var $popupClose=$('.popup__close');
    var $zoom_button=$('.zoom');
    var $overlay=$('.overlay');

    function popupOpen(e) {
        e.preventDefault();
        $('.overlay').show();
        $('.popup').show();
    }

    function popupClose(e) {
        e.preventDefault();
        $('.overlay').hide();
        $('.popup').hide();
    }

    $popupClose.on('click', popupClose);
    $zoom_button.on('click', popupOpen);
    $overlay.on('click', popupClose);
    });
