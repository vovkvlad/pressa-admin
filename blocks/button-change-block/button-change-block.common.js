BN.addDecl('button-change-block').blockTemplate(function(ctx){
    ctx.content([
        {elem: 'button', type: 'button', name: 'change', value: 'Редагувати'}
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