const request = require('request');
const catName = process.argv.splice(2).toString();

request.get(`https://api.thecatapi.com/v1/breeds/search?q=${catName}`, function (error, response) {
  const data = JSON.parse(response.body);

  if (data[0] !== undefined) {
    console.log(data[0].description)
  } else {
    console.log(`Error: invalid cat name: ${catName} does not exist.`);
  }
})