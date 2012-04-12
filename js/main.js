require.config({
  paths : {
    'text': 'libs/require/text',
    'order': 'libs/require/order',
//     'domReady': 'libs/require/domReady',
//    'jQuery' : "libs/jquery/jquery-1.7.1.min",
    'jQueryMobile': "libs/jquery/jquery.mobile-1.0.1.min",
    'Underscore': "libs/underscore/underscore-min",
    'Backbone': "libs/backbone/backbone",
    // Models:
    'UserModel': 'models/user.Model',
    // Views:
    'UserView': 'views/user.View',
    //Routers:
    'DashboardRouter': 'routers/dashboardRouter',
    //templates:
    'UserTemplate': 'templates/user-template.html',
    
    'App': "app"
  }

});


require( [
  'App',
//  'order!jQuery',
  'order!libs/jquery/jquery.mobile-1.0.1.min',
  'order!libs/underscore/underscore-min',
  'order!libs/backbone/backbone'
], function(App){
//  $.mobile.hashListeningEnabled = false;
//  $.mobile.pushStateEnabled = false;
  App.initialize();
});
