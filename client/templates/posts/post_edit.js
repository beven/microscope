/**
 * Created by blee on 30/11/2014.
 */

Template.postEdit.events({
    'submit form': function (e) {
        e.preventDefault();

        var currentPostId = this._id;

        var postProperties = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        };

        Meteor.call('postEdit', currentPostId, postProperties, function(error, result) {
            if(error) {
                return alert(error.reason);
            }
            if(result.postExists) {
                return alert('This link has already been posted');
            }
            Router.go('postPage', {_id: result._id});

        });

        /** Reference only: client side implementation **/
        /**var postWithSameLink = Posts.findOne({url: postProperties.url});
        if (postWithSameLink) {
            alert('This link has already been posted');
        } else {
            Posts.update(currentPostId, {$set: postProperties}, function (error) {
                if (error) {
                    alert(error.reason);
                } else {
                    Router.go('postPage', {_id: currentPostId});
                }
            });
        }**/
    },
    'click .delete': function (e) {
        e.preventDefault();
        if (confirm("Delete this post?")) {
            var currentPostId = this._id;
            Posts.remove(currentPostId);
            Router.go('postsList');
        }
    }
});