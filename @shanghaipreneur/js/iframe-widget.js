(function($){
    function resize(frame) {
        const body = frame.contentWindow.document.body;
        $(body).width($(frame).width());
        $(frame).height($(body).height());
        $(body).show();
    }

    function resizeAll() {
        const iframes = $('iframe');
        iframes.each(function() {
            resize(this);
        })
    }

    function add_dom_render_observer(frame, selector, func) {
        const i = setInterval(function(){
            if ($(selector, frame.contentWindow.document).length != 0) {
                func();
                clearInterval(i);
            }
        }, 100);
    }

    function add_resize_listeners() {
        const iframes = $('iframe');
        if (iframes.length > 0) {
            iframes.each(function(index) {
                add_dom_render_observer(this, "#content", () => {
                    console.log("rendered", this);
                    resize(this);
                })
                $(this).on('load', () => {
                    console.log("loaded", this);
                    resize(this);
                })
            })
            $(window).on("resize", resizeAll);
        }
    }

    add_resize_listeners();
})(jQuery);
