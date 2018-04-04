(function ($) {
    $.fn.TableFilter = function (options) {
        // Поддерживаем цепочки вызовов
        return this.each(function () {
            $(this).keyup(function () {
                var value = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

                $($(this).attr('data-tablefilter')).find('tbody tr').show().filter(function () {
                    var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                    return !~text.indexOf(value);
                }).hide();
            });
        });
    };
})(jQuery);