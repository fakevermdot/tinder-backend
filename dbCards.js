import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name:string,
    imgUrl:string,
})

export default mongoose.model('cards', cardSchema)