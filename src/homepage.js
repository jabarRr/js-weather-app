import "./index.css"
import {getLocation, accessRelevantInfo} from "./api-calls";

const titleArea = document.querySelector(".titleArea");
const tempArea = document.querySelector(".tempArea");
const infoSubSection = document.querySelector(".infoSubSection");

const conditions = document.createElement("div");
const address = document.createElement("div");
const temp =  document.createElement("div");
const feelslike = document.createElement("div");
const windspeed = document.createElement("div");
const humidity = document.createElement("div");

function populateWeatherInfo(weatherInfo){
    titleArea.innerHTML = "";
    tempArea.innerHTML = "";
    infoSubSection.innerHTML = "";

    
    const currentConditions = weatherInfo.conditions
    conditions.textContent = currentConditions;
    address.textContent = weatherInfo.address;
    temp.textContent = weatherInfo.temp + "°C";
    feelslike.textContent = "Feels Like: " + weatherInfo.feelslike + "°C";
    windspeed.textContent = "Wind: " + weatherInfo.windspeed + " MPH";
    humidity.textContent =  "Humidity: " + weatherInfo.humidity + "%";
    
    titleArea.appendChild(conditions);
    titleArea.appendChild(address);

    tempArea.appendChild(temp);

    infoSubSection.appendChild(feelslike);
    infoSubSection.appendChild(windspeed);
    infoSubSection.appendChild(humidity);

}


export {populateWeatherInfo}
