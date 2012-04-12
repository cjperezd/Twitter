define([
//  'jQuery',
  'Underscore',
  'Backbone',
  'UserModel'
  //'UserView'
], function( _, Backbone, UserModel){
  
  var DashboardRouter = Backbone.Router.extend({
    routes: {
      'dashboard': 'dashboard',
      // Default
//      '*actions': 'defaultAction'
    },
    
    /*
     * Create the view for the user model and change to the main page.  
     */
    dashboard: function(){
       var user = UserModel.initialize();
       //user.initialize();
       //user.bind( "change", function(){ console.log( "asd "+user.get("userName") );} );
       
       //TODO create a view to show the user name and data in the page...
       //var userView = new UserView( {'model': user} );
       //userView.render();
  		 
  		 var url = '#mainPage',
           effect = 'slideup',
           reverse = false,
           changeHash = true;
       $.mobile.changePage( url, {transition: effect}, reverse, changeHash );
    },
    
    defaultAction: function(actions){
      // We have no matching route, lets just log what the URL was
      // TODO: load and show a default error page...
      console.log('No route:', actions);
    }
  });
  
  var initialize = function(){
     var dashboard_router = new DashboardRouter();
     Backbone.history.start();
     return dashboard_router;
  };
  
  return {
     initialize: initialize
  }
});
