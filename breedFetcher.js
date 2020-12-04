const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response) {
    if (error) {
      callback(error);
      return;
    }
    
    const data = JSON.parse(response.body);
    if (data[0] !== undefined) {
      callback(error, data[0].description);
    } else {
      callback(error, `Error: invalid cat name: ${catName} does not exist.`);
    }
  });
};

module.exports = { fetchBreedDescription };