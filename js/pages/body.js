(function (global, func) {
    define([
        'head'
    ], func);
}(this, (function (headapi) {
    var allmumbers = [
        { "type": "tit-1", "text": "1" },
        { "type": "tit-2", "text": "2" },
        { "type": "tit-3", "text": "3" },
        { "type": "tit-5", "text": "5" },
        { "type": "tit-4", "text": "4" },
        { "type": "tit-1", "text": "1" },
        { "type": "tit-2", "text": "2" },
        { "type": "tit-3", "text": "3" },
        { "type": "tit-4", "text": "4" },
        { "type": "tit-1", "text": "1" },
        { "type": "tit-1", "text": "1" },
        { "type": "tit-5", "text": "5" },
        { "type": "tit-2", "text": "2" },
        { "type": "tit-3", "text": "3" },
        { "type": "tit-4", "text": "4" },
        { "type": "tit-1", "text": "1" },
        { "type": "tit-2", "text": "2" },
        { "type": "tit-6", "text": "6" },
        { "type": "tit-5", "text": "5" },
        { "type": "tit-3", "text": "3" },
        { "type": "tit-4", "text": "4" },
        { "type": "tit-1", "text": "1" },
        { "type": "tit-1", "text": "1" },
        { "type": "tit-2", "text": "2" },
        { "type": "tit-3", "text": "3" },
        { "type": "tit-6", "text": "6" },
        { "type": "tit-4", "text": "4" },
        { "type": "tit-5", "text": "5" },
        { "type": "tit-1", "text": "1" },
        { "type": "tit-2", "text": "2" },
        { "type": "tit-3", "text": "3" },
        { "type": "tit-6", "text": "6" },
        { "type": "tit-4", "text": "4" },
        { "type": "tit-1", "text": "1" },
        { "type": "tit-1", "text": "1" },
        { "type": "tit-5", "text": "5" },
        { "type": "tit-2", "text": "2" },
        { "type": "tit-6", "text": "6" },
        { "type": "tit-3", "text": "3" },
        { "type": "tit-4", "text": "4" },
        { "type": "tit-1", "text": "1" },
        { "type": "tit-2", "text": "2" },
        { "type": "tit-5", "text": "5" },
        { "type": "tit-3", "text": "3" },
        { "type": "tit-4", "text": "4" },
        { "type": "tit-1", "text": "1" },
        { "type": "tit-2", "text": "2" },
        { "type": "tit-3", "text": "3" },
        { "type": "tit-4", "text": "4" },
        { "type": "tit-5", "text": "5" },
        { "type": "tit-6", "text": "6" },
        { "type": "tit-4", "text": "4" },
        { "type": "tit-1", "text": "1" },
        { "type": "tit-2", "text": "2" },
        { "type": "tit-3", "text": "3" },
        { "type": "tit-4", "text": "4" },
        { "type": "tit-5", "text": "5" },
    ]
    var position = []
    var _private = {
        loadpage: function () {
            $("#main").load("./pages/main.html", function () {
                _private.render()
                setTimeout(function () {
                    var spans = $("#main").find("span")
                    _private.getPositon(spans)
                    $("#main").find("span").css("position", "absolute")
                    _private.setPositon(spans)
                }, 10)
            })
        },
        render: function (_arr) {
            $("#main .row").empty()
            $.each(_arr || allmumbers, function (i, v) {
                $("#main .row").append("<span class='" + v.type + " col-2'>" + v.text + "</span>")
            })
        },
        binkEvent: function () {
            $("#header").on("click", "span", function (e) {
                var _arr = []
                var _exarr = []
                var $tar = $(e.target)
                var _type = $tar.attr("class").split(" ")[0]
                var spans = $("#main").find("span")
                console.log(_type)

                $.each(spans, function (i, v) {
                    if ($(v).hasClass(_type)) {
                        _arr.push(v)
                    } else {
                        _exarr.push(v)
                    }
                })
                _arr = _arr.concat(_exarr)
                
                _private.setPositon(_arr)
            })
        },
        setPositon:function(arr){
            $.each(arr, function (i, v) {
                $(v).css({ "top": position[i].top + "px", "left": position[i].left + "px" })
            })
        },
        getPositon:function(eles){
            $(eles).each(function (i, v) {
                position.push($(v).position())
            })
        }
    }
    var public = {
        init: function () {
            _private.loadpage()
            _private.binkEvent()
        }
    }
    return public
})))