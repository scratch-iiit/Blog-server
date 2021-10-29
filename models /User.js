const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
    },
});

const Comment = mongoose.model("Comment", CommentSchema);


module.exports = { Comment };