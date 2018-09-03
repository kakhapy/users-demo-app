/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('UsersDemoApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit',
        'UsersDemoApp.view.users.UsersList',
        'UsersDemoApp.view.main.PhotosList'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    items: [
        {
            title: 'Users',
            iconCls: 'x-fa fa-users',
            layout: 'fit',
            items: [{
                xtype: 'userslist'
            }]
        },{
            title: 'Photos',
            iconCls: 'x-fa fa-photo',
            layout: 'fit',
            items: [{
                xtype: 'photoslist',
                reference: 'photosList'
            }]
        }
    ]
});
