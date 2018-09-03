Ext.define('UsersDemoApp.store.Photo', {
    extend: 'Ext.data.Store',

    alias: 'store.photos',

    model: 'UsersDemoApp.model.Photo',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'http://jsonplaceholder.typicode.com/photos',
        reader: {
            type: 'json',
            rootProperty: '.'
        }
    }
});
