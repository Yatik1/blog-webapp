const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const User = require('./models/User');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const app = express();

const salt = bcrypt.genSaltSync(10);
const secret= 'asehbfufvihncugbcb78bicgn8bcr797cby';

app.use(cors({credentials: true , origin: 'http://localhost:5173'}));
app.use(express.json());
app.use(cookieParser());

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

app.post('/login', async (req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      // logged in
      jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          id:userDoc._id,
          username,
        });
      });
    } else {
      res.status(400).json('wrong credentials');
    }
  });

app.get("/profile", (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token , secret, {} , (err,info) => {
        if (err) throw err;
        res.json(info); 
    })
})

app.post('/logout' , (req,res) => {
    res.cookie('token' , '').json('ok');
})

app.listen(4000)
