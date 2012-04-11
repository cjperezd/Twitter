

define([
   'jQuery',
   'Underscore',
   'Backbone',
   'DashboardRouter'
], function($, _, Backbone, DashboardRouter){
   var initialize = function(){
      DashboardRouter.initialize();
      //var user = new User();
   }

   return {
      initialize: initialize
   };

});