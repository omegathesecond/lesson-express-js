const express = require("express");
const router = express.Router();
const students = require("../../data/Students.js");

//route
router.get("/", (req, res) => {
    res.json(students);
});

router.get("/:id", (req, res) => {
    var studentID = req.params.id;
    res.status(200).send(`searched for student with ID ${studentID} `);

});

router.put("/", (req, res) => {
    var newStudent = req.body;
    currentStudentsCount = students.length;
    newStudent.id = currentStudentsCount + 1;

    //add to student
    students.push(newStudent);
    res.json(students);
});


module.exports = router;
