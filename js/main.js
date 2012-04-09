require.config({
  paths : {
    'text': 'libs/require/text',
    'order': 'libs/require/order',
//     'domReady': 'libs/require/domReady',
           'jQuery' : "libs/jquery/jquery",
           'jQueryMobile': "libs/jquery/jquery.mobile-1.0.1.min",
    'Underscore': "libs/underscore",
    'Backbone': "libs/backbone",
//    'User': 'js/models/user',
    'Mvc-utils': 'js/mvc-utils',
    'App': "app"
  }

});


require( [
  'App',
  'order!jQuery',
  'order!Underscore',
  'order!Backbone'
], function(App){
  App.initialize();
});