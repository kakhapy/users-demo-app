/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('UsersDemoApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {

    },

    stores: {
        photos: {
            type: 'photos',
            listeners: {
                load: 'onPhotosLoad'
            }
        }
    }
});
