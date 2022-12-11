const requestURL = 'https://rachelmagelsen.github.io/WDD230/final/fruit.json';
const fruits = document.querySelector('.fruits');

fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const fruitName = jsonObject["name"];
    fruitName.forEach(displayFruit);
  });

function displayFruit(fruit) {
    let name = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');

    document.querySelector('div.cards').appendChild(card);

}