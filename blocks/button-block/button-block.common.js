BN.addDecl('button-block').blockTemplate(function(ctx){
    ctx.content([
        {elem: 'buttonchange'},
        {elem: 'buttonadd'}
    ]);
}).elemTemplate({
        buttonchange: function(ctx){
            ctx.content([
                {elem: 'button', tag: 'input', attrs: {
                    type: 'button',
                    name: 'change',
                    value: 'Редагувати'
                }}
            ]);
        },
        buttonadd: function(ctx){
            ctx.content([
                {elem: 'button', tag: 'input', attrs: {
                    type: 'button',
                    name: 'addnewarticle',
                    value: 'Додати'
                }}
            ]);
        }
    });