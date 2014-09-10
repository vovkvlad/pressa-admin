BN.addDecl('imageUpload-block').onSetMod({
    js: function(){
        this._uploadButton = this.findElem('uploadbutton');
        this._uploadButton.on('click', this._upload.bind(this));
    }
}).instanceProp({
        _upload: function(){
            var formelement = jQuery('#uploadForm');
            var formdata = new FormData(formelement);
            jQuery.ajax({
                url: '/upload',
                data: formdata,
                cache: false,
                contentType: false,
                processData: false,
                type: 'POST',
                success: function(data, status, jqxhr){
                    console.log(data);
                    console.log(status);
                    console.log(jqxhr);
                    alert(data);
                },
                error: function(jqxhr, status, err){
                    alert(status);
                    alert(err);
                    console.log(jqxhr);
                }
            })
            var a =1;
            return false;
        }
    }).blockTemplate(function(ctx){
        ctx.js(true);
        ctx.tag('form');
        ctx.attr('id', 'uploadForm');
        ctx.content([
            {elem: 'label', for_atr: 'fileinput', content: 'Виберіть зображення'},
            {elem: 'input', type: 'file', name: 'fileinput'},
            {elem: 'uploadbutton', tag: 'button', content: 'Завантажити'}
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