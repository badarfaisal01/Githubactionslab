const Book = require("../models/book");

exports.lendBook = async (req, res) => {
    try {
        const { title, author, category, borrower, dueDate } = req.body;
        const book = new Book({ title, author, category, borrower, dueDate });
        await book.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.viewBooks = async (req, res) => {
    try {
        const { category, borrower, dueDate } = req.query;
        let query = {};
        if (category) query.category = category;
        if (borrower) query.borrower = borrower;
        if (dueDate) query.dueDate = { $lte: new Date(dueDate) };

        const books = await Book.find(query);
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};
