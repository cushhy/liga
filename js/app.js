$(document).ready(function () {

    $.get("https://ipinfo.io?token=31a360b818bfec", function (response) {
        if (response.city == 'Kirov') {
            $('.header__phone span').text('+7 8332 49-98-99');
            $(".header__phone").attr("href", "tel:+78332499899")
            $(".header__geo-city").text("Киров")
        } else if (response.city == 'Syktyvkar') {
            $('.header__phone span').text('+7 8212 46-75-75');
            $(".header__phone").attr("href", "tel:+78212467575")
            $(".header__geo-city").text("Сыктывкар")
        } else if (response.city == 'Izhevsk') {
            $('.header__phone span').text('+7 3412 77-14-47');
            $(".header__phone").attr("href", "tel:+73412771447")
            $(".header__geo-city").text("Ижевск")
        } else if (response.city == 'Yekaterinburg') {
            $('.header__phone span').text('+7 343 361-01-04');
            $(".header__phone").attr("href", "tel:+73433610104")
            $(".header__geo-city").text("Екатеринбург")
        } else if (response.city == 'Perm') {
            $('.header__phone span').text('+7 342 204-05-52');
            $(".header__phone").attr("href", "tel:+73422040552")
            $(".header__geo-city").text("Пермь")
        } else if (response.city == 'Nizhny Novgorod') {
            $('.header__phone span').text('+7 831 423-04-14');
            $(".header__phone").attr("href", "tel:+78314230414")
            $(".header__geo-city").text("Нижний Новгород")
        } else {
            $('.header__phone span').text('+7 999 100-80-00');
            $(".header__phone").attr("href", "tel:+79991008000")
            $(".header__geo-city").text("Москва")
        }
    }, "jsonp");


    $('.header__burger').on('click', function () {
        location.href = "https://liga.group";
    });
});