BN.addDecl('news-block').blockTemplate(function(ctx){
    var data = ctx.json();
    if (data.iseditor)
    {
        ctx.content([
            {elem: 'news-header', tag: 'h3', content: 'Редагування новини'},
            {block: 'tinymce-block', nid: data.articleNumber},
            {block: 'imageUpload-block'},
            {block: 'url-block'}
        ]);
    }
    else{
        ctx.content([
            {elem: 'news-header', tag: 'h3', content: 'Останні додані новини'},
            {block: 'table-block'}
        ]);
    }
});