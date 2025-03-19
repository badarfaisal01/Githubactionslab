const request = require("supertest");
const app = require("../server");

describe("Book Lending System", () => {
    it("should lend a book", async () => {
        const res = await request(app)
            .post("/api/books/lend")
            .send({ title: "1984", author: "George Orwell", category: "Fiction", borrower: "John", dueDate: "2024-10-30" })
            .expect(201);
        expect(res.body.title).toBe("1984");
    });
});
