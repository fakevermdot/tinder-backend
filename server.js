import express from "express";
import mongoose from "mongoose";
import  cards from "./dbCards.js";
import Cors from "cors"
// App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://kayden:LqiPucs2IBkJ63SM@cluster0.rlmh5sk.mongodb.net/Cluster0?retryWrites=true&w=majority`
//Middlewares 
app.use(express.json());
app.use(Cors())
//DB Config
mongoose.set("strictQuery", false);

mongoose.connect(connection_url)
// API Endpoints
app.get('/', (req, res) => res.status(200).send("Real madrid is the king of europe league"))

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;
    cards.create(dbCard, (err, data) => {
        if(err) {
            res.status(500).send(err)
        }else {
            res.status(201).send(data)
        }
    })

});

app.get('/tinder/cards', (req, res) => {
    cards.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))