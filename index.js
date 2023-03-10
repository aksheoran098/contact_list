// import {Express} as express from "express";
const express = require("express");
const path = require('path');

const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views' ) );
app.use(express.urlencoded({extended: true}))
app.use(express.json())


var contactList = [
    {
        name: "Ankush",
        phone: "1234567890"
    },
    {
        name: "Anu",
        phone: "1234554321"
    },
    {
        name: "CN",
        phone: "1231231230"
    }
]


app.get('/', (req,res) =>{
    return res.render('home', {  
        title : "My Contacts List",
        contact_list : contactList
    });  
})
app.get('/practice', (req,res) =>{
    return res.render('practice', {  
        title : "My Contacts List",
    });  
})
app.post('/create-contact', (req,res) =>{
    contactList.push(req.body);
    return res.redirect('/')
})

app.listen(port, (err)=>{
    if (err) {console.log("error in Server");}
    else{console.log(`Server is running on port : http://localhost:${port}`);}
});
