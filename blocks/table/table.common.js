BN.addDecl('table').onSetMod({
    js: function(){
        this._butt = this.findElem('changebutton');
        this._cells = this.findElem('cell');
        //this._currentRowID = null;
        //this._button.on('click', this._buttonClick.bind(this));
        this._cells.on('click', this._rowClick.bind(this));

    }
}).instanceProp({
        _rowClick: function(e){
            // var a2 = e.currentTarget;
            console.log(this);
            //var rowElem = this.elemify(jQuery(e.currentTarget), 'cell');
            var rowElem = jQuery(e.currentTarget);
            var id = this.elemParams(rowElem);


            this.delMod(this._cells, 'selected');
            this.setMod(rowElem, 'selected', 'yes');
            this._butt.attr('href', 'edit/' + id.id, true);//true is for reassigning href
        }
//        _buttonClick: function(e){
//            if(this._currentRowID === null){
//                alert('Choose row first');
//                return;
//            }
//            alert(this._currentRowID);
//        }
    }).blockTemplate(function(ctx){
        ctx.js(true);

        var lastnews = ctx.param('LastNews') || [];
//        ctx.content(lastnews.map(function(item, index){
//            return {
//                elem: 'row',
//                title: item.title,
//                newsId: item.nid,
//                mods: {
//                    tone: index % 2 === 0 ? 'light' : 'dark'
//                }
//            }
//        }).concat([{elem: 'changebutton'},
//                {elem: 'addbutton'}]));
        ctx.content([
            {elem: 'table', news: lastnews},
            {elem: 'changebutton'},
            {elem: 'addbutton'}
        ]);
    }).elemTemplate({
        row: function(ctx){
            var data = ctx.json();
            ctx.tag('tr');
            ctx.content({elem: 'cell', js: {id: data.newsId}, tag: 'td', content: data.title})
        },
        changebutton: function(ctx){
            ctx.tag('a');
            ctx.attr('href', '#');
            ctx.content('Редагувати')
        },
        addbutton: function(ctx){
            ctx.tag('a');
            ctx.attr('href', 'edit');
            ctx.content('Додати')
        },
        table: function(ctx){
            ctx.tag('table');
            var data = ctx.json();
            ctx.content(data.news.map(function(item, index){
                return {
                    elem: 'row',
                    title: item.title,
                    newsId: item.nid,
                    mods: {
                        tone: index % 2 === 0 ? 'light' : 'dark'
                    }
                }
            }));
        }
    });