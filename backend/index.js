const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json())

app.get('/register' , (req,res) => {
    res.json('test ok2');
});

app.post('/register' , (req,res) => {
    const {username,password} = req.body;
    res.json({requestData: {username,password}});
});

app.listen(4000)