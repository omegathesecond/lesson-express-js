const express = require("express");

//init express app
const app = express();

const router = express.Router();


router.put("/:id", (req, res)=>{
        
    res.send(req.body);
    res.send("we are searching");
});

module.exports = router;