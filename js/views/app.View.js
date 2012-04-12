define([
   'Underscore',
   'Backbone',
   'UserModel',
   'UserView'
], function( _, Backbone, UserModel, UserView){
    appView = Backbone.View.extend({

    	events:{
        "click #getBtt":  "create"
      },

    	initialize: function(){
    		var user = UserModel.initialize();
        var userView = new UserView( {'model': user} );
    	},
    	create: function(e){
      //TODO    
      },
    });            