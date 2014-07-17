BN.addDecl('table').dataTemplate(function(ctx){
    return BN('pressa-api').get('/').then(function(data){
        ctx.param('LastNews', data);
    });
});