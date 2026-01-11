const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required : true
    },
    body: {
        type: String,
        required : true
    }

}, {
    timeStamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
})

const postModel = mongoose.model("post", postSchema);
module.exports = postModel;