Ext.define('UsersDemoApp.view.users.UsersDialogController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.usersdialog',

    onCloseClick: function(btn) {
        var dialog = this.getView();
        dialog.close();
    },

    onSaveClick: function (btn) {
        var form = this.lookupReference('form');
        var dialog = this.getView();
        dialog.mask();
        form.submit({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'POST',
            success: this.processSubmitResponse,
            failure: this.processSubmitResponse,
            scope: this
        });
    },

    processSubmitResponse: function (form, response) {
        var dialog = this.getView();
        if (response.id) {
            Ext.Msg.alert('Success');
        } else {
            Ext.Msg.alert('Failure');
        }
        dialog.close();
    }
});
