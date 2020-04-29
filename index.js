const express = require("express");
const studentRouter = require("./routes/students/student.js");
const instructorsRouter = require("./routes/instructors/instructors.js");
const bodyParser = require("body-parser");

const app = express();

var PORT = 5000;

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes
app.use("/student", studentRouter);
app.use("/instructors", instructorsRouter);





app.listen(PORT, ()=>{console.log(`Listening on http://127.0.0.1:${PORT}`)});