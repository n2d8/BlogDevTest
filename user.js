let request = require('request');

const url = 'https://jsonplaceholder.typicode.com/users';

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

function mapToUserId(users){
  return users.map(function(user) {
    return user.id;
  });
}

module.exports = {
  getUsers
}
