

const express = require("express");
const bodyparser = require("body-parser");
// const { Linter } = require("eslint");

const app = express();
app.set('view engine','ejs');
app.use(express.static("static"));
app.use(bodyparser.urlencoded({extended:true}));

// var lists= [];

var items =[];


app.get ("/", function(req,res){
    var today = new Date();
    var options= {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var currentday= today.toLocaleDateString("en-US",options);
    // whatday= currentday;
    
 
    res.render('lists',{whatday:currentday, newListItems:items});
});

app.post("/", function(req,res){
    var item = req.body.newItem;
    // console.log(item);
    items.push(item);
    // newListItems=items;
    // console.log(newListItems);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("server started at port 3000");
});
