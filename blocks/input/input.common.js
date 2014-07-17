BN.addDecl('input').blockTemplate(function(ctx){
    var params = ctx.json();
    ctx.tag('input');
//    ctx.attrs({
//        name: params.name,
//        type: params.type,
//        id: params.name
//    });
    ctx.attr('name', params.name);
    ctx.attr('type', params.type);
    ctx.attr('id', params.name);
});