BN.addDecl('form').blockTemplate(function(ctx){
    ctx.tag('form');
    ctx.content([
        {block: 'label', for_atr: 'auth_login', content: 'Логін'},
        {block: 'input', type: 'text', name: 'auth_login'},
        {block: 'label', for_atr: 'auth_password', content: 'Пароль'},
        {block: 'input', type: 'password', name: 'auth_password'},
        {block: 'button', type: 'submit', content: 'Ввійти'}
    ]);
});