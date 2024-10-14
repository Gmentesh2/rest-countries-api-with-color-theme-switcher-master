//

const urlParams = new URLSearchParams(window.location.search);
const countryName = urlParams.get("name");
console.log(countryName);

const url = `https://restcountries.com/v3.1/name/${countryName}`;
const countryContent = document.querySelector("#content-id");

const getData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    countryContent.innerHTML = `
        <div class="img-div">
            <img src="${data[0].flags.png}" alt="country-img">
        </div>
        <div class="country-information">
            <h1 class="country-name">${data[0].name.common}</h1>
            <div class="about-country">
                <ul>
                    <li>Native Name: <span>${
                      Object.values(data[0].name.nativeName)[0].common
                    }</span></li>
                    <li>Population: <span>${data[0].population.toLocaleString()}</span></li>
                    <li>Region: <span>${data[0].region}</span></li>
                    <li>Sub Region: <span>${
                      data[0].subregion || "N/A"
                    }</span></li>
                    <li>Capital: <span>${data[0].capital[0]}</span></li>
                </ul> 
                <ul>
                    <li>Top Level Domain: <span>${data[0].tld.join(
                      ", "
                    )}</span></li>
                    <li>Currencies: <span>${
                      Object.values(data[0].currencies)[0].name
                    }</span></li>
                    <li>Languages: <span>${Object.values(
                      data[0].languages
                    ).join(", ")}</span></li>
                </ul>   
            </div>
            <div class="border-countries">
                <h2 class="border-country-title">Border Countries:</h2>
                <div class="border-countries-list">
                   ${
                     data[0].borders
                       ? data[0].borders
                           .map(
                             (el) => `<span class='border-list'>${el}<span/>`
                           )
                           .join(" ")
                       : "<span class='no-borders'>country has no borders<span/>"
                   }
                </div>
                </div>
        </div>`;
  } catch (error) {
    console.log(error);
  }
};
getData();
