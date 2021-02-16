/* Global Variables */

const generate = document.getElementById('generate')
const zip = document.getElementById('zip')
const feelings = document.getElementById('feelings')

/* dynamic variables*/
const date = document.getElementById('date')
const temp = document.getElementById('temp')
const content = document.getElementById('content')

/* Weather API variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
const apikey = '507b5cbdebac60e18d85c705462d9d62'


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/* Weather API Data */
const getTemp = async(baseURL, zipCode, apiKey) => { // get fn to gat data from api
    const res =await fetch(baseURL + zipCode + apiKey) // fetching the data from the OpenWeatherMap API with a full URL
    try {
        const data = await res.json();// recieving data and transform to json to be used
        return data; // return data to be used
    } catch (error) {
        console.log("error",error); // to display error if detected
    }
}
