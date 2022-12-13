const requestURL = 'https://rachelmagelsen.github.io/WDD230/final/fruit.json';
const fruit1 = document.querySelector('#fruit1');
const fruit2 = document.querySelector('#fruit2');
const fruit3 = document.querySelector('#fruit3');

fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    addFruit(jsonObject, "#fruit1")
    addFruit(jsonObject, "#fruit2")
    addFruit(jsonObject, "#fruit3")
  });

function addFruit(fruit) {
    let name = document.createElement('section');

    h2.textContent = `${fruit.name}`;

    document.querySelector('div.cards').appendChild(card);

}