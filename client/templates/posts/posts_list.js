/**
 * Created by blee on 23/11/2014.
 */

var postData = [
    {
        title: 'Introducing telescope',
        url: 'http://something.com'
    },
    {
        title: 'Meteor',
        url: 'http://meteor.com'
    },
    {
        title: 'The Meteor book',
        url: 'http://themeterorbook.com'
    }
];

Template.postsList.helpers({
        posts: postData
    }
);

