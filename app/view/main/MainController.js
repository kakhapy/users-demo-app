/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('UsersDemoApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'UsersDemoApp.view.users.UsersDialog'
    ],

    alias: 'controller.main',

    onPhotosLoad: function (store, records) {
        store.loadData(records.slice(0, 10));
        var photosList = this.lookupReference('photosList');
        photosList.setItemTpl('<div><img height="200" src={url} /></div><div>{title}</div>');
    },

    onNewUserClick: function() {
        var dialog = Ext.widget('usersdialog');
        dialog.show();
    }
});
