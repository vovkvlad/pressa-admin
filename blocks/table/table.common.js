BN.addDecl('table').blockTemplate(function(ctx){
    var lastnews = ctx.param('LastNews') || [];
    ctx.content(lastnews.map(function(item, index){
        return index % 2 === 0 ? {elem: 'lightcell', title: item.title, newsid: item.nid} : {elem: 'darkcell', title: item.title, newsid: item.nid};
        }));
}).elemTemplate({
        lightcell: function(ctx){
            ctx.tag('tr');
            var data = ctx.json();
            ctx.content([{elem: 'cell', tag: 'td', content: data.title}]);
        },
        darkcell: function(ctx){
            ctx.tag('tr');
            var data = ctx.json();
            ctx.content([{elem: 'cell', tag: 'td', content: data.title}]);
        }
    });