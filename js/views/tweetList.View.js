define([
   'jQuery',
   'Underscore',
   'Backbone',
   'TweetListModel',
   ], function( $, _, Backbone, TweetListModel){
      TweetView = Backbone.View.extend({

      	tagName: "li",


      	initialize: function(){
      		this.model.bind('change', this.render,this);
      		_.bindAll(this,'render','remove','unrender');
      		this.model.bind('remove',this.unrender,this);
      		$("#list").listview();
      	},

      	render: function(){
      		this.$el.html(result);
      		$("#list").listview('refresh');
      		return this;
      	},

      	 unrender: function(){
           	$(this.el).remove();
          },

      	remove: function(){
            	this.model.destroy();
          },	
          
    });