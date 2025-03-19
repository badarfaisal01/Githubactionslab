const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    category: String,
    borrower: String,
    dueDate: Date,
});

module.exports = mongoose.model("Book", BookSchema);
