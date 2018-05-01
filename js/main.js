console.log(1);
require.config({

    paths: {
        "head":"./pages/head",
        "body":"./pages/body"
    }

});
require(["head","body"],function(headapi,bodyapi){
    headapi.init()
    bodyapi.init()
})