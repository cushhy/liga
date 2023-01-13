$(document).ready(function () {
    if (YMaps.location.city != '') {
        var youCity = (YMaps.location.city);
        if (youCity === "Киров") {
            $('.header__phone span').text('+7 833 249-98-99');
            $(".header__phone").attr("href", "tel:+78332499899")
            $(".header__geo-city").text("Киров")
        }
        else if (youCity === "Сыктывкар") {
            $('.header__phone span').text('+7 821 246-75-75');
            $(".header__phone").attr("href", "tel:+78212467575")
            $(".header__geo-city").text("Сыктывкар")
        }
        else if (youCity === "Ижевск") {
            $('.header__phone span').text('+7 341 277-14-47');
            $(".header__phone").attr("href", "tel:+73412771447")
            $(".header__geo-city").text("Ижевск")
        }
        else if (youCity === "Екатеринбург") {
            $('.header__phone span').text('+7 343 361-01-04');
            $(".header__phone").attr("href", "tel:+73433610104")
            $(".header__geo-city").text("Екатеринбург")
        }
        else if (youCity === "Пермь") {
            $('.header__phone span').text('+7 342 204-05-52');
            $(".header__phone").attr("href", "tel:+73422040552")
            $(".header__geo-city").text("Пермь")
        }
        else if (youCity === "Нижний Новгород") {
            $('.header__phone span').text('+7 831 423-04-14');
            $(".header__phone").attr("href", "tel:+78314230414")
            $(".header__geo-city").text("Нижний Новгород")
        }
        else if (youCity === "Ростов-на-Дону") {
            $('.header__phone span').text('Ростов на дону');
            $(".header__phone").attr("href", "tel:+78314230414")
            $(".header__geo-city").text("Ростов")
        }
        else {
            $('.header__phone span').text('+7 999 100-80-00');
            $(".header__phone").attr("href", "tel:+79991008000")
            $(".header__geo-city").text("Москва")
        }
    };

    $('.header__burger').on('click', function () {
        location.href = "https://liga.group";
    });
});