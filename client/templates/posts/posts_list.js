/**
 * Created by blee on 23/11/2014.
 */
Template.postsList.helpers({
        posts: function(){
            return Posts.find();
        }
    }
);

