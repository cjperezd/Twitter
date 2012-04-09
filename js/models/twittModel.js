

define([
  'Underscore',
  'Backbone'
], function(_, Backbone){
  
    var twitt = Backbone.Model.extend({

        defaults: {
            text: " ... ",
            favorite: false
        },
        
        initialize: function(){
            
        }
  });
  
  // You usually don't return a model instantiated
  return twitt;
  
});