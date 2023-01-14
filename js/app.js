$(document).ready(function () {

    $(document).ready(function () {
        $.get("https://ipinfo.io?token=31a360b818bfec", function (response) {
            if (response.city == 'Kirov') {
                $('.header__phone span').html('+7 833 249-98-99')
                $('.header__phone').attr('href', 'tel:+78332499899')
                $('.header__geo-city').html('Киров')
            }
        }, "jsonp");
    });

});