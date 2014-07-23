BN.addDecl('tinymce-block').onSetMod({
    js: function(){
        tinymce.init({
            selector: "textarea",
            plugins: [
                "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "table contextmenu directionality emoticons template textcolor paste fullpage textcolor"
            ],

            toolbar1: "newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
            toolbar2: "cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor image media code | inserttime preview | forecolor backcolor",
            toolbar3: "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak restoredraft",
            height: 450,

            menubar: false,
            toolbar_items_size: 'small',

            style_formats: [
                {title: 'Bold text', inline: 'b'},
                {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
                {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
                {title: 'Example 1', inline: 'span', classes: 'example1'},
                {title: 'Example 2', inline: 'span', classes: 'example2'},
                {title: 'Table styles'},
                {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
            ],

            templates: [
                {title: 'Test template 1', content: 'Test 1'},
                {title: 'Test template 2', content: 'Test 2'}
            ]
        });
    }
}).blockTemplate(function(ctx){
        ctx.js(true);
        ctx.content([
            {elem: 'label', for_atr: 'title', content: 'Назва статті'},
            {elem: 'input', type: 'text', name: 'title'},
            {elem: 'label', content: 'Чи э дана новина важливою?'},
            {elem: 'input', type: 'checkbox', name: 'isbreaking', value: 'checkb1'},
            {elem: 'label', content: 'Оберіть категорію'},
            {elem: 'select'},
            {
                elem: 'tinymcesource',
                tag: 'script',
                attrs: {
                    type: 'text/javascript',
                    src: '../../src/tinymce/js/tinymce/tinymce.min.js'
                }
            },
            {
                elem: 'form',
                tag: 'form',
                attrs: {
                    method: 'post'
                },
                content: {
                    elem: 'textarea',
                    tag: 'textarea'
                }
            },
            {elem: 'submitbutton', tag: 'button', content: 'Додати новину'}
        ]);
    }).elemTemplate({
        input: function(ctx){
            var params = ctx.json();
            ctx.tag('input');
            ctx.attr('name', params.name);
            ctx.attr('type', params.type);
            ctx.attr('id', params.name);
            if(params.value) ctx.param('value', params.value);
        },
        label: function(ctx){
            ctx.tag('label');
            var params = ctx.json();
            if (params.title) ctx.attr('for', params.for_atr);
        },
        select: function(ctx){
            ctx.tag('select');
            ctx.content([
                {
                    elem: 'option',
                    tag: 'option',
                    value: 'Students life',
                    content: 'Students life'
                },
                {
                    elem: 'option',
                    tag: 'option',
                    value: 'News',
                    content: 'News'
                },
                {
                    elem: 'option',
                    tag: 'option',
                    value: 'Conferences',
                    content: 'Conferences'
                }
            ]);
        }
    });