define([
  'jQuery',
  'Underscore',
  'Backbone'
], function($, _, Backbone ){
  
  var DashboardRouter = Backbone.Router.extend({
    routes: {
      'dashboard': 'dashboard',
      // Default
      '*actions': 'defaultAction'
    },
    
    /*
     * Create the view for the user model and change to the main page.  
     */
    dashboard: function(){
       $.mobile.changePage( '#mainPage', {transition: "slideup"} );
       //TODO create a view to show the user name and data in the page...
    },
    
    defaultAction: function(actions){
      // We have no matching route, lets just log what the URL was
      // TODO: load and show a default error page...
      console.log('No route:', actions);
    }
  });

  var initialize = function(){
     var dashboard_router = new DashboardRouter;
  };
  
  return {
     initialize: initialize
  };
});
