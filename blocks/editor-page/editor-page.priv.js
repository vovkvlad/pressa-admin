BN.addDecl('editor-page', 'page', {
    route: /^\/edit(\/[0-9]*)?$/
}).staticProp({
        init: function(matches){
            var articleNumber =  matches[1] ? articleNumber = matches[1].slice(1) : null;
            return this.out({block: 'news-block', iseditor: true, articleNumber: articleNumber});
        },
        update: function(){

        },
        destruct: function(){

        }
    });