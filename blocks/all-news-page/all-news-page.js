BN.addDecl('all-news-page', 'page', {
    route: /^\/allnews$/
}).staticProp({
        init: function(){
            return vow.reject();
        },
        update: function(){

        },
        destruct: function(){

        }
    });