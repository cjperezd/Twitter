

define([
   'Underscore',
   'Backbone',
   'DashboardRouter'
], function( _, Backbone, DashboardRouter){
   var initialize = function(){
      DashboardRouter.initialize();
   }

   return {
      initialize: initialize
   };

});