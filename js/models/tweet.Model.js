

define([
  'Underscore',
  'Backbone'
], function(_, Backbone){
  
    var tweet = Backbone.Model.extend({

        defaults: {
            text: " ... ",
            data: "",
            favorite: "",
            created_at: "",
            profile_image_url: "",
            from_user_id_str: "",
            id_str: "",
            from_user: "",
            to_user_id: "",
            metadata: "",
            id: "",
            geo: "",
            from_user_id: "",
            iso_language_code: "",
            source: "",
            to_user_id_str: ""
        },
        
        initialize: function(){
            
        }
  });
  
  return tweet;
  
});