const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

var nextTask=["DSA","OOPS","Project"];
var workList=[];

app.get('/', function(req, res){
    let day=date.getDate();
    res.render("index",{ListTitle:day, nextTask:nextTask});
})
app.post("/", function(req,res){
    var t=req.body.task;
    if(req.body.list=="Work"){
        workList.push(t);
        res.redirect("/Work");
    }
    else{
        nextTask.push(t);
        res.redirect("/");
    }
    
})
app.get("/Work", function(req,res){
    res.render("index",{ListTitle:"Work", nextTask:workList});
})

app.listen(3000,function(){
    console.log("This port 3000");
})