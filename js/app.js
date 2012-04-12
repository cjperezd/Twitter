

define([
   'Underscore',
   'Backbone',
   'UserModel',
   'UserView' 
], function( _, Backbone,UserModel, UserView){
   var initialize = function(){
   		var user = UserModel.initialize();
        var userView = new UserView( {'model': user} );
   }

   return {
      initialize: initialize
   }

});
