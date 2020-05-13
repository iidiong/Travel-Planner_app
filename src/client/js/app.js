/* Global Variables */
/*
Request format
api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
"http://api.openweathermap.org/data/2.5/weather?zip=94040,us";
http://api.geonames.org/findNearbyPlaceNameJSON?lat=47.3&lng=9&username=demo
https://pixabay.com/api/?key=16471210-adcdb9f7c9889c5519cdbda83&q=nj&category=nature&image_type=photo
 const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCodeValue},us&appid=${apiKey}`;
const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityNameValue}&key=${weatherBitApi}`;
const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=40.695184&lon=-74.267653&key=${weatherBitApi}`;
cityDataR.data.length
*/

const serverBaseUrl = "http://localhost:3000/";
const weatherBitApi = "da41e4bb803c4ea683e9bd9ece028f65";
const pixabayAPIkey = "16471210-adcdb9f7c9889c5519cdbda83";


const searchBtn = document.querySelector("#search");
const displayArea = document.querySelector("#entryHolder");
const tripLength = document.querySelector("#tripLength");
const sTravelDate = document.querySelector("#sDate");
const eTravelDate = document.querySelector("#eDate");
const cityName = document.querySelector("#city");
const temphigh = document.querySelector("#tempHigh");
const templow = document.querySelector("#tempLow");
const tempicon = document.querySelector("#tempicon");
const imagDisplay = document.querySelector(".image");
const imageELement = document.querySelector(".holder");
const dataDate = "";
const imgURL = "";
const srcURL = ""; 
const altURL = "";
const countryCode = "";


// Create a new date instance dynamically with JS
let webData = {};
let cityData = "";
let weatherbitURL = "";
let cityDataR = "";
let cityDataR1 = "";
let lowTemp = "";
let highTemp = "";
let validDate = "";
let icon = "";

// searchBtn.addEventListener("click", requestTemp, false);
function requestTemp(event) {
  if (cityName.value) {
    const cityNameValue = cityName.value;
    const dateValue = sTravelDate.value;
    let lat = "";
    let lng = "";
    const geonameURL = `http://api.geonames.org/postalCodeSearchJSON?placename=${cityNameValue}&maxRows=10&username=iidiong`;
   
    retrieveData(geonameURL)
      .then(result => {
        cityData = result;
        
        lat = cityData.postalCodes[0]["lat"];
        lng = cityData.postalCodes[0]["lng"];
        
        const  weatherbitURL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${weatherBitApi}`;
        return retrieveData(weatherbitURL)
      })
      .then(result1 => {
        cityDataR = result1;
        
        for (let i = 0; i < 7; i++){
          if (cityDataR.data[i]["datetime"] === dateValue){
            highTemp = cityDataR.data[i]["high_temp"];
            lowTemp = cityDataR.data[i]["low_temp"];
            validDate = cityDataR.data[i]["valid_date"];
            cName = cityDataR["city_name"];
            stateCode = cityDataR["state_code"];
            icon = cityDataR.data[i].weather["icon"];
            weatherDes = cityDataR.data[i].weather["description"];
          } 
        } 

        webData = {
          highTemp: `${(highTemp * 9/5) + 32}`,
          lowTemp: `${(lowTemp * 9/5) + 32}`,
          validDate: validDate,
          icon: icon,
          cName: cName,
          stateCode: stateCode,
          weatherDes: weatherDes,
        };

        pixabayURL = `https://pixabay.com/api/?key=${pixabayAPIkey}&q=${cityNameValue}&category=nature&image_type=photo`;
        return retrieveData(pixabayURL);
      })
      .then(result2 => {
        cityDataR1 = result2;
        if (parseInt(cityDataR1.totalHits) > 0){
          
          index = Math.floor((Math.random() * 10) + 1);

          webData.pageURL = cityDataR1.hits[index]["pageURL"];
          webData.webformatURL = cityDataR1.hits[index]["webformatURL"];
        }
          else {
          console.log('No hits');
        }
      })
      .then(function(data) {
        postData(serverBaseUrl + "add", webData);
      })
      .then(() => { updateUI(webData);})
      .catch(error => console.log(`There was an error :`, error));
  } else {
    retrieveData(serverBaseUrl + "all").then(function(allData) {
      updateUI(allData);
    });
  }
}

function updateUI(webData) {
  // const lowtempToFarh = `${(lowTemp * 9/5) + 32}`;
  // const hightempToFarh = `${(highTemp * 9/5) + 32}`;

  const lowtempToFarh = webData.lowTemp;
  const hightempToFarh = webData.highTemp;

  const templet = `My trip to: ${webData.cName}, ${webData.stateCode}\nDeparting: ${webData.validDate}\n${webData.weatherDes}`

  const tripDuration = `Travel Days ${tripDays(sTravelDate.value, eTravelDate.value)}`;

  // tripLength.innerText = tripDuration || "No valid Data is available";
  tripLength.innerText = templet || "No valid Data is available";
  // tempicon.innerText = `<link rel="icon" href="/src/client/media/icons/${icon}.png">`;
  templow.innerText = `Low - ${ Number.parseInt(lowtempToFarh)} °F`|| "No valid Data is available";
  temphigh.innerText = `High - ${Number.parseInt(hightempToFarh)} °F` || "No valid Data is available";
  displayArea.setAttribute("class", "entryHolder");

  imagDisplay.innerHTML = `<div class="image">
          <a href=${webData.pageURL}><img alt="" src=${webData.webformatURL} wwidth="640" height="423"></a></div>`


}

// Async POST
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://www.geonames.org",
    },
    body: JSON.stringify(data)
  });
  try {
    const newData = await response;
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

// Async GET
const retrieveData = async (url = "") => {
  const request = await fetch(url);
  try {
    // Transform into JSON
    const allData = await request.json();
    return allData;
  } catch (error) {
    console.log("error", error);
  }
};

function tripDays (sdate, edate) {
  let oneDay = (1000 * 60 * 60 * 24)
  let startDay = new Date(sdate);
  let endDay = new Date(edate);
  return Math.floor((Date.UTC(endDay.getFullYear(), endDay.getMonth(), endDay.getDate()) - Date.UTC(startDay.getFullYear(), startDay.getMonth(), startDay.getDate())) / oneDay);
}

module.exports = { requestTemp, retrieveData, tripDays }