(function (global, func) {
    define([
        'require'
    ], func);
}(this, (function (dep) {
    var _private = {
        loadpage : function () {
            $("#header").load("./pages/header.html",function(){
                setTimeout(function(){
                    $("#header").css("left",($("body").width()-$("#header").outerWidth())/2+"px")
                },10)
            })
        }
    }
    var public = {
        init : function () {
            _private.loadpage()
        }
    }
    return public
})))