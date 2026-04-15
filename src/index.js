import "./index.css"
import searchIcon from "./used-weather-icons/search.png";

document.querySelector(".searchIcon").src = searchIcon;
const citySearchBox = document.querySelector(".citySearchBox");


import {getLocation, accessRelevantInfo} from "./api-calls";
import {populateWeatherInfo} from "./homepage";
const submitBtn = document.querySelector(".submitBtn");


const defualtLocation = getLocation("London").then(
    result => {
        console.log("Defualt Weather Info ", result);
        return result
    }    
).then(
    result => {
        console.log("Final Infoss", accessRelevantInfo(result))
        populateWeatherInfo(accessRelevantInfo(result))
        return accessRelevantInfo(result);
    }
);


submitBtn.addEventListener("click", submitBtnClick);

function submitBtnClick(e){
    e.preventDefault();
    
    const userInput = document.forms["citySearchForm"]["citySearchBox"].value;
    if (userInput === ""){
        citySearchBox.style.borderColor = "red";
        citySearchBox.setAttribute("placeholder", "Cannot be Blank");
    }
    
    else {
        citySearchBox.style.borderColor = "black";
        citySearchBox.setAttribute("placeholder", "Enter City Here")
    const inputRequest = getLocation(userInput).then(
        result => {
            console.log("Result is: ", result)
            return result;
        }
        ).then(
            result => {
                console.log("Final Infoss", accessRelevantInfo(result))
                populateWeatherInfo(accessRelevantInfo(result))
                return accessRelevantInfo(result);
            }
        );    
    }


}


