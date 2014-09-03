BN.addDecl('url-block').blockTemplate(function(ctx){
    ctx.tag('form');
    ctx.content([
        {elem: 'label', for_atr: 'textbox', content: 'URL Зображення'},
        {elem: 'input', type: 'text', name: 'textbox'}
    ]);
}).elemTemplate({
        input: function(ctx){
            var params = ctx.json();
            ctx.tag('input');
            ctx.attr('name', params.name);
            ctx.attr('type', params.type);
            ctx.attr('id', params.name);
        },
        label: function(ctx){
            ctx.tag('label');
            var params = ctx.json();
            ctx.attr('for', params.for_atr);
        }
    });