const mongoose = require("mongoose")

const AppSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        desc: {type: String, required: true},
        img: {type: String, required: true},
        link: {type: String}
    },
    {timestamps: true}
);

module.exports = mongoose.model("Application", AppSchema)