if (typeof(jQuery) !== 'undefined') {
    (function($){
        function load_pjax(element) {
            // $.pjax({url: element.attr("data-pjax"), container: "#"+element.attr("id")})
            $.get(element.attr("data-pjax"), function(data) {
                element.html(data);
            });
        }
        $("div[data-pjax]").each(function(){
            load_pjax($(this));

        })
    })(jQuery);
} else {
    (function(){
        window.$ = document.querySelectorAll.bind(document);
        function load_pjax(element) {
            const url = element.getAttribute("data-pjax")
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = function() {
                element.innerHTML = xhr.responseText;
            };
            xhr.send();
        }
        for (const e of $("div[data-pjax]")) {
            load_pjax(e);
        }
    })();
}
