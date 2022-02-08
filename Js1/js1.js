const container = document.querySelector(".container");
/* Country*/
const renderCountry = function (data) {
  const html = `
  <div>
  <img src = "${data.flag}" width ="300" height="200" >
  <div>
  <h3 style="max-width :300px;">The name of country : ${data.name} </h3>
  <p> The name of capital 🤴🚩:${data.capital}</p>
  <p> The reigion 🌏:${data.region}</p>
  </div>
  </div>
 `;
  container.style.opacity = 1;
  container.insertAdjacentHTML("beforeend", html);
};
/* Country's Neighbour*/
const renderNeighbour = function (data) {
  const html = `
  <div>
  <img src = "${data.flags.svg}" width ="300" height="200" >
  <div>
  <h3 style="max-width :300px;">The name of country : ${data.name.official} </h3>
  <p> The name of capital 🤴🚩:${data.capital}</p>
  <p> The reigion 🌏:${data.region}</p>
  </div>
  </div>
 `;
  container.style.opacity = 1;
  container.insertAdjacentHTML("beforeend", html);
};
/*Using API */
const country = function (cont) {
  const request3 = fetch(`https://restcountries.com/v2/name/${cont}`);
  request3
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)})
        .then((el) => el.json())
        .then((el) => renderNeighbour(el[0]));
};
country("syria");
country("lebanon");
country("turkey");
country("yaman");

