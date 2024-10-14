//
const url = "https://restcountries.com/v3.1/all";
const countryContainer = document.querySelector(".countries-container");
// // Fetching data from API 
let countries = null;
const getData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    countries = data;
    renderCountries(data);
  } catch (error) {
    console.log(error);
  }
};

getData();

function renderCountries(data) {
  countryContainer.innerHTML = ""

  data.forEach((country) => {
    const article = document.createElement("article");
    article.classList.add("country-card");
    article.innerHTML = `
               <img src="${country.flags.png}" alt>
              <h2>${country.name.common}</h2>
              <ul>
                  <li>
                      <span class="country-info-span">Population:</span> ${country.population.toLocaleString()}
                  </li>
                  <li>
                      <span class="country-info-span">Region:</span> ${country.region}
                  </li>
                  <li>
                      <span class="country-info-span">Capital:</span> ${country.capital}
                  </li>
              </ul>
              `;
    countryContainer.append(article);
    article.style.cursor = "pointer"
    //navigation event

    article.addEventListener(('click'), () => {
      //console.log("hello")
      // using query parameter "?" 
      location.href = (`http://127.0.0.1:5500/country.html?name=${country.name.common}`)
    })
  });
}

// input filtration 

const countryInput = document.getElementById("countryInput")
console.log(countryInput.value)

countryInput.addEventListener("input", () => {
  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLocaleLowerCase().includes(countryInput.value)
  })
  //console.log(filteredCountries)
  renderCountries(filteredCountries)
})

// select filtration

const countrySelect = document.querySelector("#country-select")

countrySelect.addEventListener(("change"), () => {
  const selectedRegion = countrySelect.value

  let filteredCountries;

  if(selectedRegion === "All"){
    filteredCountries = countries
  }else{
    filteredCountries = countries.filter((country) => {
      return country.region === selectedRegion
    })
  }

  renderCountries(filteredCountries)

})

