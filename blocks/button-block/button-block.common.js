BN.addDecl('button-block').blockTemplate(function(ctx){
    ctx.content([
        {block: 'button-change-block'},
        {block: 'button-add-block'}
    ]);
});