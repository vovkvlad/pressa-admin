BN.addDecl('editor-page', 'page', {
    route: /^\/edit(\/[0-9]*)?$/
}).staticProp({
        init: function(){
            return vow.reject();
        },
        update: function(){

        },
        destruct: function(){

        }
    });