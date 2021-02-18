
/* Weather API variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q={city}&zip='
const apiKey = '45d9430d92b61aec3f57298753c39820'


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/*const dataURL = '/add'
const projectDataURL = '/all'*/

/* Function called by event listener */
generate.addEventListener('click', clickedGenerate);

function clickedGenerate(e) {
    e.preventDefault();

    const zip = document.getElementById('zip').value;
    const content = document.getElementById('feelings').value;

    retrieveWeather(baseURL, zip, apiKey)
    .then(function (userData){
        getData('/add',  { date: newDate, temp: userData.main.temp, content})
    }).then(function () {
        updateUI()
    })
    //form.reset();
}

/* get web API data*/
const retrieveWeather = async (baseURL, zip, apiKey) => {
    const res = await fetch(baseURL + zip + apiKey);
    try {
        const userData = await res.json();
        return userData;
    } catch (error) {
        console.log("error", error);
    }
}


/* POST data */
const getData = async (url = '', data = {}) =>{

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
        console.log(newData);
        return newData
    }catch(error) {
        console.log("error", error);
    }
};

/* update UI */
const updateUI = async () => {
    const req = await fetch('/all')
    try{
        const allData = await req.json()
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temp;
        document.getElementById('content').innerHTML = allData.content;
    }catch(error) {
        console.log("error", error);
    }
}

