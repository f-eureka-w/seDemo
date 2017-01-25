
(function(id, src, attrs) {
    if (document.getElementById(id)) {
        return;
    }
    var js = document.createElement('script');
    js.src = src;
    js.type = 'text/javascript';
    js.id = id;
    for (var name in attrs) {
        if (attrs.hasOwnProperty(name)) {
            js.setAttribute(name, attrs[name]);
        }
    }
    var e = document.getElementsByTagName('script')[0];
    e.parentNode.insertBefore(js, e);
})('hs-analytics', '//js.hs-analytics.net/analytics/1485303900000/1787193.js', {
    "data-loader": "hs-scriptloader"
});