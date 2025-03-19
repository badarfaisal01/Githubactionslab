const express = require("express");
const { lendBook, viewBooks } = require("../controllers/bookController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/lend", authMiddleware, lendBook);
router.get("/view", authMiddleware, viewBooks);

module.exports = router;
