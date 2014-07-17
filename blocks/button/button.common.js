BN.addDecl('button').blockTemplate(function(ctx){
    ctx.tag('button');
    ctx.attr('type', ctx.param('type'))
});