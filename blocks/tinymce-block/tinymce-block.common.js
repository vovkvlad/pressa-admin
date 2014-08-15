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
            ],
            init_instance_callback: function(){
                if(article){
                    setinfo(article._res[0]);
                }
                else console.log("it's empty");
            }
        });
        var NewsID = parseInt(this.elemParams('form').id);
        if(NewsID) var article = this._downloadArticle(NewsID);//if we are editing - get info from api
        var setinfo = this._setInfo; //setinfo and article variables are necessary cause tinymce.init() has different context,
                                     // and because of this this._title etc, are not reachable from initi
        this._title = this.findElem('input', 'title', 'true');
        this._checkbox = this.findElem('input', 'checkbox', 'true');
        this._category = this.findElem('select');
        this._btn = this.findElem('submitbutton');
        this._btn.on('click', this._btnClick.bind(this));
    }
}).instanceProp({
        _btnClick: function(){
            var article = {
                title: this._title[0].value,
                content: tinyMCE.activeEditor.getContent({format : 'raw'}),
                category: this._category[0].value,
                isbreaking: this._checkbox[0].checked ? 1 : 0,
                date: new Date()
            };

            var options = {
                body: JSON.stringify(article)
            }
            BN('pressa-api').post('192.168.174.130:8333', options).then(function(data){
                console.log(data);
            });
        },
        _downloadArticle: function(nid) {
            return BN('pressa-api').get(nid).then(function(data){
                return data;
            });
        },
        _setInfo: function(articleObj){
            tinyMCE.activeEditor.setContent(articleObj.content);
            this._category[0].value = articleObj.category;

        }
    }).blockTemplate(function(ctx){
        ctx.js(true);
        var nid = ctx.json().nid;
        ctx.content([
            {elem: 'label', for_atr: 'title', content: 'Назва статті'},
            {elem: 'input', type: 'text', name: 'title', mods: {title: true}},//mod is used to identify particular input among other inputs
            {elem: 'label', content: 'Чи э дана новина важливою?'},
            {elem: 'input', type: 'checkbox', name: 'isbreaking', value: 'checkb1', mods: { checkbox: true}},
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
                js: {id: nid},
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
                    attrs: {
                        value: 'studentslife'
                    },
                    content: 'Students life'
                },
                {
                    elem: 'option',
                    tag: 'option',
                    attrs: {
                        value: 'news'
                    },
                    content: 'News'
                },
                {
                    elem: 'option',
                    tag: 'option',
                    attrs: {
                        value: 'conferences'
                    },
                    content: 'Conferences'
                }
            ]);
        }
    });