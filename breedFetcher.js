const request = require('request');
request.get('https://api.thecatapi.com/v1/breeds/search/?q=sib', function (error, response) {
  error ? console.log(error) : console.log(response.body);
})
  // .on('response', function(response) {
  //   console.log(body)
  // });