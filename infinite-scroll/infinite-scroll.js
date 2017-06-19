(function(wnd) {
    var d = wnd.document;
    var loading = false;
    var previousOffset = wnd.pageYOffset;

    var defaultOpts = {
        distance: 200,
        cb: function(done) {
            done();
        }
    };

    function onScroll(opts) {
        var scrollDown = wnd.pageYOffset > previousOffset;
        var validDistance = (wnd.innerHeight + wnd.pageYOffset) >= (d.body.offsetHeight - opts.distance); 

        if (!loading && scrollDown && validDistance) {
            loading = true;
            opts.cb(function() {
                loading = false;
            });
        }

        previousOffset = wnd.pageYOffset;
    }

    function infiniteScroll(options) {
        var opts = Object.assign(defaultOpts, options);
        document.addEventListener('scroll', onScroll.bind(null, opts));
    }

    wnd.infiniteScroll = infiniteScroll;
})(window);