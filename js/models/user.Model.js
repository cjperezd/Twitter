
define([
  'Underscore',
  'Backbone'
], function( _, Backbone ){
  var User = Backbone.Model.extend({
    defaults: {
      "name": "undefined",
      "email": "itsnot@defined.com" 
    }
  });
  
  return User;
});
