const requestURL = 'https://rachelmagelsen.github.io/WDD230/chamber/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject["businesses"];
    businesses.forEach(displayBusinesses);
  });

function displayBusinesses(business) {
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let logo = document.createElement('img');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let website = document.createElement('p');

  h2.textContent = `${business.name}`;
  address.textContent = `${business.address}`;
  phone.textContent = `${business.phone}`;
  website.textContent = `${business.website}`;

  logo.setAttribute('src', business.logo);
  logo.setAttribute('alt', `logo`);
  logo.setAttribute('loading', 'lazy');

  card.appendChild(logo);
  card.appendChild(h2);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(website);

  document.querySelector('div.cards').appendChild(card);
}