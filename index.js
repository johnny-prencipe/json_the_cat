const { fetchBreedDescription } = require('./breedFetcher');
const catName = process.argv.splice(2).toString();

fetchBreedDescription(catName, (error, desc) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log(desc);
  }
});