;(function ( $, window, document, undefined ) {
    $.fn.mapit = function (options) {
        var exp;
        var settings = $.extend({
            mapurl: 'https://maps.google.co.uk/maps?q=',
            tooltip: ' - Google maps',
            newWindow: true,
            country: 'uk',
            exp: ''
        }, options);
        return this.each(function () {
            switch(settings.country) {
                case 'uk':
                    exp = '(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))'
                    break;
                case 'us':
                    exp = '(\\d{5}?)';
                    break;
                case 'canada':
                    exp = '([ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\\d{1}[A-Z]{1}\\d{1})';
                    break;
                default:
                    exp = settings.exp;
            }
            $(this).html($(this).html().replace(new RegExp(exp, 'gi'),'<a href="' + settings.mapurl + '$1" ' + (settings.newWindow ? ' target="_blank"' : '') + ' class="mapit" title="$1' + settings.tooltip + '">$1</a>'));
            
        });
    }
}(jQuery));