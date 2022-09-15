const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())
const uri = 'mongodb://localhost:27017/LotteryDB'

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    isWinner: { type: Boolean, required: true },
    lotteryNo: { type: Number, required: true }
}, {
    collection: 'users'
})
const Users = mongoose.model('UserModel', UserSchema)
// console.log(Users)
const port = 2500;

const connect = async () => {
    try {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connected to Mongodb")
    }
    catch (error) {
        console.error(error);
    }
}
connect();

app.get('/users/:name/:lotteryno', async (req, res) => {
    // console.log(req.params)
    const participantArr = lotteryParticipants.filter((item, index) => {
        if (item.name === req.params.name) {
            return item
        }
    })
    const winnerArr = lotteryParticipants.filter((item, index) => {
        // console.log(item.lotteryNo, req.params.lotteryno)
        if (item.name === req.params.name && item.isWinner === true && item.lotteryNo.toString() === req.params.lotteryno) {
            return item
        }
    })
    let winnerMsg = ''
    if (participantArr.length > 0 && winnerArr.length === 0) {
        winnerMsg = "Try next time"
    } else if (winnerArr.length > 0) {
        winnerMsg = "COngrats you won"
    } else {
        winnerMsg = "You are not participant"
    }
    res.json({
        name: req.params.name,
        message: winnerMsg
    })
})

app.listen(port, () => {
    console.log(`Server runnning on port ${port}`);
});

app.post('/participants', async (req, res) => {
    Users.create(req.body)
    res.json({
        LotteryDetail: req.body
    })
})

app.get('/participants', async (req, res) => {
    Users.find({}, (error, users) => {
        if (error) {
            res.send("something went wrong!!");
            next();
        }
        res.json(users)
    })
})

app.put('/participants', async (req, res) => {
    // console.log(req.body)
    Users.findOneAndUpdate({ name: req.body.name }, {
        $set: { isWinner: true }
    })
        .then(result => {
            res.json({
                message: "info updated",
                detail: result
            })
        })
        .catch(err => {
            // console.log(err)
            res.json({
                error: err
            })
        })
})
