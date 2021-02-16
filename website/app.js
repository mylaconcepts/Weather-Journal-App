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
const apiKey = '507b5cbdebac60e18d85c705462d9d62'


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const dataURL = '/add'
const projectDataURL = '/all'

/* Function called by event listener */
generate.addEventListener('click', clickedGenerate);

function clickedGenerate(e) {
    feelings.value;

    apiData(baseURL, zip.value, apiKey)
    .then(function (APItemperature) {
        postData(dataURL, {temperature: APItemperature, date: newDate, userResponse: feelings.value});
        updateUI();
    });
}

/* get web API data*/
const getApiData = async (baseURL, zip, apiKey) => {
    const res = await fetch(baseURL + zip + '&appid=' + apiKey);
    try {
        const webData = await res.json();
        APItemperature = webData.main.temp;
        return APItemperature
    } catch (error) {
        console.log("error", error);
    }
}

/* get project data*/
const getData = async (url='') => {
    const req = await fetch(url);
    try{
        const allData = await req.jason()
        return allData
    }
    catch(error) {
        console.log("error", error);
    }
};

/* POST data */
const postData = async (url = "", data = {}) =>{

    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await res.json();
        return newData;
    }catch(error) {
        console.log("error", error);
    }
};

/* update UI */
const updateUI = async () => {
    const req = await fetch(projectDataURL)
    try{
        const allData = await req.json()
        const newRecord = allData[allData.length -1];
        date.innerHTML = 'Date: ' + newRecord.date;
        temp.innerHTML = 'Temperature: ' + newRecord.temperature;
        content.innerHTML = 'Feelings: ' + newRecord.userResponse;
    }catch(error) {
        console.log("error", error);
    }
}

