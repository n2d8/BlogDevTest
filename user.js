let request = require('request');

const url = 'https://jsonplaceholder.typicode.com/users';

/*
function: return all ID of all users of the blog
parameters: none
*/
function getUsers() {
  return new Promise(function(resolve, reject) {
    request(url, function(error, response, body){
			if(!error && response.statusCode == 200){
				resolve(mapToUserId(JSON.parse(body)));
			} else {
				reject('Error: ' + error);
			}
    });
  });
}

/*
function: takes the JSON object of all users and return a the ID of the users
parameters: users - JSON object of all users
*/
function mapToUserId(users){
  return users.map(function(user) {
    return user.id;
  });
}

module.exports = {
  getUsers
}
