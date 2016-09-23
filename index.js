// entry point to get the total number of posts from all users then print it to console

let user = require('./user');
let post = require('./post');

user.getUsers()
  .then(post.countPosts)
  .then(function(totalPosts) {
    console.log("Total number of posts: " + totalPosts);
  });
