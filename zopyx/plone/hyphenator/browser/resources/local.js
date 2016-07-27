$(document).ready(function() {

    var hyphenatorSettings = {
        selectorfunction: function () {
            return $('span').get();
        }
    };
    Hyphenator.config(hyphenatorSettings);
    Hyphenator.run();
});
