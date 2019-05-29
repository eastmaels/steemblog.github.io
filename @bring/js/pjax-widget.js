(function($){
    function lodd_pjax(element) {
        // $.pjax({url: element.attr("data-pjax"), container: "#"+element.attr("id")})
        $.get(element.attr("data-pjax"), function(data) {
            element.html(data);
        });
    }
    $("div[data-pjax]").each(function(){
        lodd_pjax($(this));

    })
})(jQuery);
