const mongoose = require("mongoose")

const GameSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        desc: {type: String, required: true},
        img: {type: String, required: true},
        link: {type: String},
        price: {type: Number, required: true},
    },
    {timestamps: true}
);

module.exports = mongoose.model("Game", GameSchema)