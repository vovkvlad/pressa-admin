BN.addDecl('news-block').blockTemplate(function(ctx){
    ctx.content([
        {elem: 'news-header', tag: 'h3', content: 'Останні додані новини'},
        {block: 'table-block'}
    ]);
});