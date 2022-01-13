var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const Mysql = require('sync-mysql');
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static("views/static"));
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var obj; 
const process = require('process');
const port = 8080;
app.listen(port);
console.log("Server Started on port 8080");

const con = new Mysql({
  // port : "12449",
   host: "db4free.net",
   user: "shivamk",
   password: "ravi*123#",
   database: "projecttsi"
 });




app.get('/', function(req, res){
    res.render("home",{home:"active",about:"",our_team:"",contact:""}) ;
  });
app.get('/about', function(req, res){
    res.render("about",{home:"",about:"active",our_team:"",contact:""}) ;
  });
app.get('/our-team', function(req, res){
    res.render("our-team",{home:"",about:"",our_team:"active",contact:""}) ;
  });
app.get('/contact', function(req, res){
    res.render("contact",{home:"",about:"",our_team:"",contact:"active"}) ;
  });

app.get('/BIO', (req,res) =>{
  res.render("BIO/biotechHome")
})
app.get('/CSE', (req,res) =>{
  res.render("CSE/cseHome")
})
app.get('/ECE', (req,res) =>{
  res.render("ECE/home")
})
app.get('/EEE', (req,res) =>{
  res.render("EEE/home")
})
app.get('/IT', (req,res) =>{
  res.render("IT/itHome")
})
app.get('/MECH', (req,res) =>{
  res.render("MECH/mechHome")
})




//ECE Branch Starts Here

// For ECE Branch PYQ
app.get('/ECE/PYQ/:sem', function(req, res){
  var sem = req.params.sem;
     if(sem>=1 && sem<=1){
  var picker = "SELECT DISTINCT subject FROM ECE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'pyq'";
  var ECE = con.query(picker);
  var picker2 = "SELECT name , subject,semester,link FROM ECE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'pyq'";
  var ECE2 = con.query(picker2);
  console.log(ECE2);
 res.render("./ECE/PYQ" , {ECE:ECE , ECE2:ECE2,sem:sem});
     }
     else{
       res.send("Wrong URL");
     }
});
// For ECE Branch notes
app.get('/ECE/notes/:sem', function(req, res){
  var sem = req.params.sem;
     if(sem>=1 && sem<=1){
  var picker = "SELECT DISTINCT subject FROM ECE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'notes'";
  var ECE = con.query(picker);
  var picker2 = "SELECT name , subject,semester,link FROM ECE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'notes'";
  var ECE2 = con.query(picker2);
  console.log(ECE2);
 res.render("./ECE/notes" , {ECE:ECE , ECE2:ECE2,sem:sem});
     }
     else{
       res.send("Wrong URL");
     }
});
// For ECE Branch books
app.get('/ECE/books/:sem', function(req, res){
var sem = req.params.sem;
   if(sem>=1 && sem<=1){
var picker = "SELECT DISTINCT subject FROM ECE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'books'";
var ECE = con.query(picker);
var picker2 = "SELECT name , subject,semester,link FROM ECE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'books'";
var ECE2 = con.query(picker2);
console.log(ECE2);
res.render("./ECE/books" , {ECE:ECE , ECE2:ECE2,sem:sem});
   }
   else{
     res.send("Wrong URL");
   }
});
// ECE branch Ends Here 














/*

//EEE Branch Starts Here

// For ECE Branch PYQ
app.get('/EEE/PYQ/:sem', function(req, res){
  var sem = req.params.sem;
     if(sem>=1 && sem<=8){
  var picker = "SELECT DISTINCT subject FROM ECE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'pyq'";
  var ECE = con.query(picker);
  var picker2 = "SELECT name , subject,semester,link FROM ECE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'pyq'";
  var ECE2 = con.query(picker2);
  console.log(ECE2);
 res.render("./EEE/PYQ" , {ECE:ECE , ECE2:ECE2,sem:sem});
     }
     else{
       res.send("Wrong URL");
     }
});
// For ECE Branch notes
app.get('/EEE/notes/:sem', function(req, res){
  var sem = req.params.sem;
     if(sem>=1 && sem<=8){
  var picker = "SELECT DISTINCT subject FROM EEE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'notes'";
  var ECE = con.query(picker);
  var picker2 = "SELECT name , subject,semester,link FROM EEE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'notes'";
  var ECE2 = con.query(picker2);
  console.log(ECE2);
 res.render("./EEE/notes" , {ECE:ECE , ECE2:ECE2,sem:sem});
     }
     else{
       res.send("Wrong URL");
     }
});
// For ECE Branch books
app.get('/EEE/books/:sem', function(req, res){
var sem = req.params.sem;
   if(sem>=1 && sem<=8){
var picker = "SELECT DISTINCT subject FROM EEE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'books'";
var ECE = con.query(picker);
var picker2 = "SELECT name , subject,semester,link FROM EEE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'books'";
var ECE2 = con.query(picker2);
console.log(ECE2);
res.render("./EEE/books" , {ECE:ECE , ECE2:ECE2,sem:sem});
   }
   else{
     res.send("Wrong URL");
   }
});
// ECE branch Ends Here 





*/


