
define([
//   'jQuery',
   'Underscore',
   'Backbone',
   'UserModel',
   'text!../templates/user-template.html'
   ], function( _, Backbone, UserModel, UserTemplate){
      var UserView = Backbone.View.extend({
         
         el: $("#userProfile"),
         
         template: _.template( '<div class=""><div> User Name: <%= userName %> </div></div>' ),
         
         initialize: function(){
            console.log(UserTemplate);
            _.bindAll(this, 'render');
         },
         
         render: function() {
            $(this.el).html( this.template(this.model.toJSON()) );
            return this;
         }
         
   });
   
   return new UserView();
   
});