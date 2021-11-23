
const express = require('express')
const reload = require("reload")







const app = express();
//middleware

//more live reloading
//app.use(connectLivereload())
//app.use(express.static(publicDirectory))

//static files
app.use(express.static((__dirname)));
//being able t get stuff from formns
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());


//setting a port with heroku or local
var PORT = process.env.PORT || 5500

module.exports = app;

//adding view engine(ejs)
app.set("view engine", "ejs")
app.set("views",  "./views/pages")
app.set("partials","./views/partials")


 
app.get("/", function(req,res) {

res.render("index") 

});

app.get("/profile/:userid", function(req,res){


res.render("profile")
});


app.get("/pictures", function(req,res){

res.render("pictures")

});


app.listen(PORT)
console.log("listening on http://127.0.0.1:" + PORT + "/")

//get app to reload when chanes are made(look at package.json)
reload(app)



app.use((req,res) => {


res.status(404).render("404")




})






