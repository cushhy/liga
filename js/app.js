$(document).ready(function () {
    ymaps.ready(function () {
        var geolocation = ymaps.geolocation;
        if (geolocation.city == undefined) {
            // Если город не определился, то выводим "неопределен"
            // По умолчанию город Москва (указываем в html)
            $('.header__geo-city').html('неопределен');
        } else {
            $('.header__geo-city').html('' + geolocation.city);
        }
        // Для нужных городов прописываем свои телефоны
        // Для других городов покажется номер по умолчанию - "+7 (123) 000-00-00" (указываем в html)
        if (geolocation.city == "Киров") {
            $('.header__phone span').html('+7 833 249-98-99')
            $('.header__phone').attr('href', 'tel:+78332499899')
        };
        if (geolocation.city == "Екатеринбург") {
            $('.header__phone span').html('+7 343 361-01-04')
            $('.header__phone').attr('href', 'tel:+73433610104')
        };
        if (geolocation.city == "Сыктывкар") {
            $('.header__phone span').html('+7 821 246-75-75')
            $('.header__phone').attr('href', 'tel:+782124675754')
        };

    });
});