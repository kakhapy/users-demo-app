Ext.define('UsersDemoApp.store.User', {
    extend: 'Ext.data.Store',

    alias: 'store.users',

    model: 'UsersDemoApp.model.User',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'http://jsonplaceholder.typicode.com/users',
        reader: {
            type: 'json',
            rootProperty: '.'
        }
    }
});
