define([
   'jQuery',
   'Underscore',
   'Backbone',
   'Tweet'
   ], function( $, _, Backbone, UserModel, Tweet){
      var tweetList = Backbone.Collection.extend({
      	model: Tweet
      })
     }
);     	
         