Ext.define('UsersDemoApp.view.main.PhotosList', {
    extend: 'Ext.DataView',
    xtype: 'photoslist',

    requires: [
        'UsersDemoApp.store.Photo'
    ],

    bind: {
        store: '{photos}'
    },

    itemTpl: '<div>{title}</div>'
});
