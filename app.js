/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'UsersDemoApp.Application',

    name: 'UsersDemoApp',

    requires: [
        // This will automatically load all classes in the UsersDemoApp namespace
        // so that application classes do not need to require each other.
        'UsersDemoApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'UsersDemoApp.view.main.Main'
});
