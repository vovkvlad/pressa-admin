BN.addDecl('all-news-page', 'page', {
    route: /^\/allnews$/
}).staticProp({
        init: function(){
            return this.out({block: 'news-block'});
        },
        update: function(){

        },
        destruct: function(){

        }
    });