const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const User = require('./models/User');

const app = express();

const salt = bcrypt.genSaltSync(10);

app.use(cors());
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

app.listen(4000)
