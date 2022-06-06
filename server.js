const express = require('express');
const bp = require('body-parser');
const morgan = require('morgan');
const path = require('path');


const {json, urlencoded} = bp;

const db = [

];

const app = express();

app.use(urlencoded({extended: true}));
app.use(json());
app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, "projects.html"));
  });
  

  app.use("/public", express.static("./public"));

app.listen(process.env.PORT);


