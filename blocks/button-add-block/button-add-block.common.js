BN.addDecl('button-add-block').blockTemplate(function(ctx){
    ctx.content([
        {elem: 'button', type: 'button', name: 'add', value: 'Додати'}
    ]);
}).elemTemplate({
        button: function(ctx){
            ctx.tag('input');
            var params = ctx.json();
            ctx.attr('name', params.name);
            ctx.attr('type', params.type);
            ctx.attr('value', params.value);
        }
    });