import {API_KEY} from "../config";


// Defualt Location will be london
async function getLocation(userLocation){
    const baseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'; //  /Location?key=11111 
    try{
        const apiCall = await fetch(baseUrl+userLocation+"?key="+API_KEY+"&unitGroup=uk");
        if (!apiCall.ok){
            throw new Error(`Http Error: Status ${apiCall.status}`);
        }
        const apiCallJson = await apiCall.json();
        console.log(apiCallJson);
        return apiCallJson;
    }
    catch(error){
        console.log("Error fetching Data", error.message);
    }
}

function accessRelevantInfo(jsonObj){
    
    const conditions = jsonObj.currentConditions.conditions;
    console.log("Description Check: ", conditions);
    const address = jsonObj.address;
    const temp = jsonObj.currentConditions.temp;
    const feelslike = jsonObj.currentConditions.feelslike;
    const windspeed = jsonObj.currentConditions.windspeed;
    const humidity = jsonObj.currentConditions.humidity;



    return {conditions, address, temp, feelslike, windspeed, humidity}
}





export {getLocation, accessRelevantInfo};