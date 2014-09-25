BN.addDecl('upload-page', 'page', {
    route: /^\/upload$/
}).staticProp({
    init: function(){
        var body;
        var request = BEM.blocks['i-router'].getReq();
        console.log(request);
        request.on('data', function(chunk){
            
            body += chunk;
        });
        request.on('end', function(){
            console.log(body);
        })
        request.on('error', function(err){
            console.log(err);
        })
        return this.out('it`s upload baby!')
    },
    update: function(){

    },
    destruct: function(){

    }
});