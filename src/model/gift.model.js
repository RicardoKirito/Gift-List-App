import mongoose from "mongoose";

const Gift = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    priceRange: [{type:Number}],
    locations: [{
        type: String
    }],
    amount: Number,
    remain: Number,
    picturesLink: [{type: String}],
    Description: String,
    pickedamount: [{guestname: String, amount: Number}],
    picked: Boolean,
    category: String
})

export default mongoose.model("Gift", Gift)