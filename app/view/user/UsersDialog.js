Ext.define('UsersDemoApp.view.users.UsersDialog', {
    extend: 'Ext.Dialog',
    requires: [
        'UsersDemoApp.view.users.UsersDialogController'
    ],
    xtype: 'usersdialog',
    controller: 'usersdialog',

    title: 'Add New User',

    items: [
        {
            xtype: 'formpanel',
            reference: 'form',
            items: [
                {
                    xtype: 'textfield',
                    label: 'Name',
                    name: 'name'
                },
                {
                    xtype: 'textfield',
                    label: 'User Name',
                    name: 'username'
                },
                {
                    xtype: 'emailfield',
                    label: 'Email',
                    name: 'email'
                },
                {
                    xtype: 'textfield',
                    label: 'Phone',
                    name: 'phone'
                }
            ]
        }
    ],

    buttons: [
        {
            text: 'Save',
            handler: 'onSaveClick'
        },
        {
            text: 'Close',
            handler: 'onCloseClick'
        }
    ]
});
