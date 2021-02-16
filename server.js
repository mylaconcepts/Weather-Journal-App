// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// GET Route to retrieve projectData
app.get('/weather', (req, res) => {
    res.send("This is weather end point");
  });

app.get("*", (req, res) => {
    res.send("Page not found.");
});

  app.post('/', (req, res) => {
    const {date, temp, content} = req.body
    projectData[date] = {
      temp,
      content,
    }
    res.status(201).send()
  })

  // Setup Server
const port = 8000

const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})