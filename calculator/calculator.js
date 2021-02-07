const  express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port= 3000;

app.get ("/", function(req, res){
	res.sendFile(__dirname+'/index.html')});

app.post("/", function(req,res){
	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);
	var result = num1+num2;
	res.send("The result of the calculation is "+ result)});

app.get("/bmicalculator", function(req, res){
	res.sendFile(__dirname+"/bmicalculator.html")});

app.post("/bmicalculator",function(req, res){
	var w=Number(req.body.weight);
	var h=Number(req.body.height);
	var bmi= w/(h*h)*10000;
	res.send("<h1>Your BMI is  </h1>"+bmi)});


app.listen(port, function(){
	console.log("server is started at http://localhost:",port )});
