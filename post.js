var request = require('request');

const url = ' https://jsonplaceholder.typicode.com/posts?userId=';

function countPosts(users){
  return new Promise(function(resolve, reject) {
    let completedRequests = 0;
    let totalRequests = users.length;
    let totalPosts = 0;
    users.forEach(function(user) {
      countPostForUser(user)
        .then(function(count) {
          totalPosts += count;
          completedRequests++;
          if(completedRequests === totalRequests) {
            resolve(totalPosts);
          }
        });
    });
  });
}

function countPostForUser(userId){
  return new Promise(function(resolve, reject) {
    const postsUrl = url + userId;
    request(postsUrl, function(error, response, body) {
      if(!error && response.statusCode == 200) {
        const posts = JSON.parse(body);
        resolve(posts.length);
      }else {
        reject(error);
      }
    });
  });
}

module.exports = {
  countPosts
}
