Meteor.publish('posts', function() {
    return Posts.find();
});

//Meteor.startup(function() {
//    Tracker.autorun(function() {
//        console.log('There are ' + Posts.find().count() + ' posts');
//    });
//});