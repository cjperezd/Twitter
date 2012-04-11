require.config({
  paths : {
    'text': 'libs/require/text',
    'order': 'libs/require/order',
//     'domReady': 'libs/require/domReady',
    'jQuery' : "libs/jquery/jquery-1.7.1.min",
    'jQueryMobile': "libs/jquery/jquery.mobile-1.0.1.min",
    'Underscore': "libs/underscore/underscore-min",
    'Backbone': "libs/backbone/backbone",
    // Models:
    'User': 'models/user.Model',
    //Routers:
    'DashboardRouter': 'routers/dashboardRouter',
    
//    'GlobalMvc': 'js/global-mvc',
    'App': "app"
  }

});


require( [
  'App',
  'order!jQuery',
  'order!jQueryMobile',
  'order!Underscore',
  'order!Backbone'
], function(App){
  App.initialize();
});
