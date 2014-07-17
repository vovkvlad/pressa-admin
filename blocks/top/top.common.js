BN.addDecl('top').blockTemplate(function(ctx){
    ctx.content([
        {elem: 'title'}
    ]);
}).elemTemplate({
        title: function(ctx){
            ctx.tag('h1')
            ctx.content('Панель Адміністрування');
        }
    });