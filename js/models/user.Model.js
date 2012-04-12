
define([
  'Underscore',
  'Backbone'
], function( _, Backbone ){
  var User = Backbone.Model.extend({
    defaults: {
    }
  });
  
  var user = new User();
  
  function initialize() {
       
       $.ajax({
          type: 'GET',
          url: 'http://g1.bootcamp.dev.globant.com/Twitter/api/service/UserCredentials.php',
          data: {},
          crossDomain: true,
          success: function(res){
              user.set( eval('(' + res + ')') );
              //console.log( user.get("user_id") );
          },
          error: function(){
              console.log('error getting session atributes')
          }
       });
       
       //console.log( user.get("user_id") );
       return user;
       
  };
  
  return {
     initialize: initialize
  }
});
