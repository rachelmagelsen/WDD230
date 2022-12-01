const requestURL = 'https://rachelmagelsen.github.io/WDD230/chamber/data.json';
const theater = document.querySelector('.theater');
const chs = document.querySelector('.chs');
const hike = document.querySelector('.hike');
const index1 = randomIntFromInterval(0, 3).toFixed(0);
const index2 = randomIntFromInterval(4, 6).toFixed(0);
const index3 = randomIntFromInterval(7, 9).toFixed(0);

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  };

fetch(requestURL) 
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const members = jsonObject["businesses"];
      displayMember(members[index1], 'div.theater');
      displayMember(members[index2], 'div.chs');
      displayMember(members[index3], 'div.hike');
    });

function displayMember(member, spotlight) {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');

    name.textContent = `${member.name}`;
    address.textContent = `${member.address}`;
    phone.textContent = `${member.phone}`;
    website.textContent = `${member.website}`;

    logo.setAttribute('src', member.logo);
    logo.setAttribute('alt', `logo`);
    logo.setAttribute('loading', 'lazy');  

    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);  

    document.querySelector(`${spotlight}`).appendChild(card);
}