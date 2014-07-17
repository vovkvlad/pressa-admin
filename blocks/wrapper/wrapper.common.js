BN.addDecl('wrapper').blockTemplate(function(ctx){
    ctx.content([
        {block: 'login-window'},
        {elem: 'support'}
    ]);
}).elemTemplate({
        support: function(ctx){
            ctx.tag('p');
            ctx.content('З приводу будь-яких питань звертатися до VKolo.bokV@gmail.com');
        }
    });