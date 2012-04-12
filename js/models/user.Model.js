define([
    'Underscore',
    'Backbone'
], function( _, Backbone ){
    
    var UserModel = Backbone.Model.extend({
        
        defaults: {
            userName: "Sin nombre"
        }
        
     });
     
     
     var user = new UserModel();
     
     function initialize() {
            $.ajax({
                type: 'GET',
                url: 'http://g1.bootcamp.dev.globant.com/api/service/UserCredentials.php',
                context: this,
                data: {},
                crossDomain: true,
                success: function(res){
                    var data =  eval('(' + res + ')');
                    user.set({"userName" : data.screen_name });
                },
                error: function(){
                    console.log('error getting session atributes')
                }
            });
            
            return user;
     }
    
    return {
     initialize: initialize
    }
  
});
