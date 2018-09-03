Ext.define('UsersDemoApp.view.users.UsersList', {
    extend: 'Ext.grid.Grid',
    xtype: 'userslist',

    requires: [
        'UsersDemoApp.store.User'
    ],

    store: {
        type: 'users'
    },

    title: ' ',

    titleBar: {
        xtype: 'titlebar',
        docked: 'top',
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-plus',
                text: 'Add User',
                handler: 'onNewUserClick'
            }
        ]
    },

    columns: [{ 
        text: 'Name',
        dataIndex: 'name',
        width: 100
    }, {
        text: 'User Name',
        dataIndex: 'username',
        width: 150
    }, {
        text: 'Email',
        dataIndex: 'email',
        width: 230 
    }, { 
        text: 'Phone',
        dataIndex: 'phone',
        width: 150 
    }]
});
