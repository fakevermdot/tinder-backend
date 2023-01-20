import express from "express";
import mongoose from "mongoose";
import cards from "./dbCards"

// App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://admin:u8dBkEJGHCXZ01pn@cluster0.rlmh5sk.mongodb.net/tinderdb?retryWrites=true&w=majority`
//Middlewares 


//DB Config
mongoose.connect(connection_url , {
    useMewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

// API Endpoints
app.get('/', (req, res) => res.status(200).send("Real madrid is the king of europe league"))

app.post('/tinder/card', (req, res) => {
    const dbCards = req.body;
    cards.create(dbCards, (err, data) => {
        if(err) {
            res.status(500).send(err)
        }else {
            res.status(201).send(data)
        }
    })

});

app.get('/tinder/card', (req, res) => {
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