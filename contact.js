const express = require('express');
const path = requre('path');
const nodemailer = require('nodemailer');
const http = require('http');
const bodyParser = require('body-parser');

let app = express();
let server = http.Server(app);
let port = 80;

app.use(express.static(path.join(__dirname+ 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

// Route for contact page:\

app.get('/contact', (req,res) =>{
    res.sendFile(path.join(__dirname+ '/contact.html'))
});

//Serve Static File of css

app.use('/css', express.static(path.join(__dirname+ 'css')));

app.use(express.static(path.join(__dirname+ 'public')))


// Handling form submission:

app.post('/form', (req,res) => {
    const {Name , Email, Subject, Message} = req.body;

    const transporter = nodemailer.transporter({
        service: 'gmail',
        auth: {
            user: "info@buildmax.com.pk"
            pass:  "info@654321"
        }
    });
    const mailOption = {
        from: Email,
        to: "info@buildmax.com.pk"

    }
});