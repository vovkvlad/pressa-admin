BN.addDecl('label').blockTemplate(function(ctx){
    ctx.tag('label');
    var params = ctx.json();
    ctx.attr('for', params.for_atr);
});