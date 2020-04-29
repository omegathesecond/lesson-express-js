const express = require("express");
const exhbs = require("express-handlebars");

//init app
const app = express();
var PORT = 5000;

//init handle bars
app.engine("handlebars", exhbs());
//specify view engine
app.set("view engine", "handlebars");


app.get("/", (req, res) => {
    res.render('index', {
        title: "INdex Page",
        description:"Real madrid will never "
    });
});

app.get("/about", (req, res) => {
    title: "About Page"
    res.render('about', {
        title: "about us",
        description: "I am a student"
    });
});

app.listen(PORT, () => { console.log(`we are listenning on http://127.0.0.1:${PORT}`) });