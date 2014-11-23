if(Posts.find().count() === 0) {
    Posts.insert({
        title: 'Introducing telescope',
        url: 'http://something.com/introducing-telescope'
    });
    Posts.insert({
        title: 'Introducing telescope 2',
        url: 'http://something.com/introducing-telescope-2'
    });
    Posts.insert({
        title: 'Introducing telescope 3',
        url: 'http://something.com/introducing-telescope-3'
    });
}