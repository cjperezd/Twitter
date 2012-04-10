
define([
   'jQuery',
   'Underscore',
   'Backbone',
   'UserModel',
   'text!../../templates/user-template.html'
   ], function( $, _, Backbone, UserModel, UserTemplate){
      var UserView = Backbone.View.extend({
         
         el: $("#userViewContainer"), //TODO
         
         var template = _.template( UserTemplate );
         
         initialize: function(){
            _.bindAll(this, 'render');
         },
         
         render: function() {
            $(this.el).html( this.template(this.model.toJSON()) );
            return this;
         }
         
   });
   
   return {
      new UserView;
   }
   
});