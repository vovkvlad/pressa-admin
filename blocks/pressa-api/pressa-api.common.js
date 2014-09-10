BN.addDecl('pressa-api', 'ajax', {
    apiHost: 'http://localhost.localdomain:8333/'
}).staticProp({
    post: function(resource, options){
        return this._request('post', resource, options)
    }
});