BN.addDecl('login-page', 'page', {
    route: /^\/$/
}).staticProp({
        init: function(){
            return this.out({block: 'wrapper'});
        },
        update: function(){

        },
        destruct: function(){

        }
    });