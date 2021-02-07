

const { json, query } = require("express");
const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")
    
}) 

app.post("/", function(req,res){
    const location = req.body.cityName;
    const apiKey= "c229e74971117991449497f31b8b2b6e";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ location +"&units=metric&appid="+ apiKey +"";
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
        
        const weatherdata = JSON.parse(data);
        const temp = weatherdata.main.temp;
        const weatherdescription = weatherdata.weather[0].description;
        const icon = weatherdata.weather[0].icon;
        const imageURL = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
        res.write("<h1> The temperature in "+ location +" is "+ temp + "</h1>");
        res.write("<p> The weather is currently"+ weatherdescription + "</p>");
        res.write("<img src="+ imageURL + ">");
        res.send();
        });
    });
})
app.listen(3000, function(){
    console.log("server is running at port 3000.")
})