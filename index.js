let user = require('./user');
let post = require('./post');

user.getUsers()
  .then(post.countPosts)
  .then(function(totalPosts) {
    console.log("Total number of poosts: " + totalPosts);
  });
