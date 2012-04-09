

define([
   'jQuery',
   'Underscore',
   'Backbone',
   'User'
], function($, _, Backbone, User){
   var initialize = function(){
      User.initialize();
   }

   return {
      initialize: initialize
   };

});