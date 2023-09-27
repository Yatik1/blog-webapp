const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const User = require('./models/User');
const jwt = require('jsonwebtoken')

const app = express();

const salt = bcrypt.genSaltSync(10);
const secret= 'asehbfufvihncugbcb78bicgn8bcr797cby';

app.use(cors({credentials: true , origin: 'http://localhost:5173'}));
app.use(express.json())

mongoose.connect('mongodb+srv://yatiksrivastava1:Dfva4UQdwbsiJ9Y9@cluster0.1fw5w0f.mongodb.net/?retryWrites=true&w=majority')

app.get('/register' , (req,res) => {
    res.json('test ok2');
});

app.post('/register' , async (req,res) => {
    const {username,password} = req.body;
    try {
        const UserDoc = await User.create({
            username,
            password:bcrypt.hashSync(password,salt),
        });
        res.json(UserDoc);
    } catch(e) {
        console.log(e)
        res.status(400).json(e)
    }
});

app.post('/login' , async (req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password , userDoc.password);
    // res.json(passOk)
    if (passOk) {
        //login
        jwt.sign({username , id: userDoc._id}, secret , {} , (err,token) => {
            if (err) throw err; 
            res.cookie('token' , token).json('ok');
        })
    } else {
        res.status(400).json('wrong crendentials')
    }
})

app.listen(4000)
