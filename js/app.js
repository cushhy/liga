$(document).ready(function () {

    $('.header__burger').on('click', function () {
        location.href = "https://liga.group";
    });

    if (YMaps.location.city != '') {
        var youCity = (YMaps.location.city);
        if (youCity === "Киров") {
            $('.header__phone span').text('+7 833 249-98-99');
        }
        else if (youCity === "Сыктывкар") {
            $('.header__phone span').text('+7 821 246-75-75');
        }
        else if (youCity === "Ижевск") {
            $('.header__phone span').text('+7 341 277-14-47');
        }
        else if (youCity === "Екатеринбург") {
            $('.header__phone span').text('+7 343 361-01-04');
        }
        else if (youCity === "Пермь") {
            $('.header__phone span').text('+7 342 204-05-52');
        }
        else if (youCity === "Нижний Новгород") {
            $('.header__phone span').text('+7 831 423-04-14');
        }
        else {
            $('.header__phone span').text('+7 999 100-80-00');
        }
    };

    $('.lightzoom').lightzoom();
});