const request = require('request');
const catName = process.argv.splice(2).toString();

const fetchBreedDescription = function (breedName, callback) {
  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function (error, response) {
    if (error) {
      callback(error)
      return;
    };
    
    const data = JSON.parse(response.body);
    if (data[0] !== undefined) {
      callback(error, data[0].description);
    } else {
      callback(error, `Error: invalid cat name: ${catName} does not exist.`);
    }
  });
};

fetchBreedDescription(catName, (error, desc) => {
  if (error) {
    console.log('Error:', error);
  }
  else {
    console.log(desc);
  }
});