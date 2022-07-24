//Title
let h1 = document.createElement("h1");
h1.setAttribute("id","title");
h1.setAttribute("class","text-center");
h1.innerHTML = "REST COUNTRIES AND WEATHER USING FETCH API";
document.body.append(h1);

const div1 = document.createElement("div");
div1.setAttribute("class","container");
div1.setAttribute("id","hidden")
document.body.append(div1);

const div2 = document.createElement("div");
div2.classList.add("row");
div1.append(div2);

//Get all country detail by using async/await and fetch()
async function getCountries(){
    const all = await fetch("https://restcountries.com/v3.1/all");
      const data = await all.json();
      console.log(data);
      data.forEach(country => {

        const Column = document.createElement("div");
        Column.setAttribute("class","col-4 col-sm-6 col-md-4 col-lg-4 col-xl-4 g-5");

        const card1 =document.createElement("div");
        card1.setAttribute("class","card h-100 ");
        card1.setAttribute("style","width: 18rem;");
        card1.innerHTML = ` <div class="card-header">
          <h4 class="card-text">${country.name.common}</h4>
          </div>
            <img class="card-img-top" src="${country.flags.png}" alt="">
            <div class="card-body">
            <div class="card-text">
            <h6>Region : ${country.region}</h6>
            <h6>Native Name: ${country.name.official}</h6>
            <h6>Population: ${country.population}</h6>
            <h6>Capital: ${country.capital}</h6>
            <h6>Country Code: ${country.cca3}</h6>
            <h6>Latlng: ${country.latlng}</h6>
            </div>
             </div>`;

           const button = document.createElement("button");
            button.classList.add("btn", "btn-primary");
            button.textContent = "Click for Weather";
            card1.append(button);
            Column.append(card1);
           div2.append(Column);

button.addEventListener("click", weatherReport);   
async function weatherReport(){
 const weather = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=ca112fd8ff007a6940a08407c211d787`);
 const weatherData = await weather.json();
 
    //console.log(weatherData);
document.getElementById("hidden").innerHTML = "";
        const divNew = document.createElement("div");
        divNew.setAttribute("class","container");
        document.body.append(divNew);
     //create card
        let row = document.createElement("div");
        row.classList.add("row","g-3","container");
        divNew.append(row);

        let Column = document.createElement("div");
        Column.setAttribute("class","col col-lg-4 col-sm-12");
        row.append(Column);

        let card2 =document.createElement("div");
        card2.setAttribute("class","card h-100");
        card2.setAttribute("style","width: 18rem;");

        card2.innerHTML = ` <div class="card-header">
          <h4 class="card-text">${country.name.common}</h4>
          </div>
             <img src="${country.flags.svg}" alt="">
            <div class="card-body">
            <h6 class="card-text">Temperature: ${weatherData.main.temp}</h6>
            <h6 class="card-text">Ground-Level: ${weatherData.main.grnd_level}</h6>
            <h6 class="card-text">Humidity: ${weatherData.main.humidity}</h6>
            <h6 class="card-text">Pressure: ${weatherData.main.pressure}</h6>
            <h6 class="card-text">Sea-Level: ${weatherData.main.sea_level}</h6>
            <h6 class="card-text">Temp-Max: ${weatherData.main.temp_max}</h6>
            <h6 class="card-text">Temp-Min: ${weatherData.main.temp_min}</h6>
           </div>`;
        Column.append(card2);

        let button1 = document.createElement("button");
        button1.setAttribute("class","btn btn-primary");
        button1.innerText = "Reset";
        card2.append(button1);
  
        //Location reset
        button1.addEventListener("click",()=>{
          location.reload()
        })

}





});//loop
}//function
getCountries()