BN.addDecl('editor-page', 'page', {
    route: /^\/edit(\/[0-9]*)?$/
}).staticProp({
        init: function(matches){
            return this.out({block: 'news-block', iseditor: true, articleNumber: matches[0].slice(6)});
        },
        update: function(){

        },
        destruct: function(){

        }
    });