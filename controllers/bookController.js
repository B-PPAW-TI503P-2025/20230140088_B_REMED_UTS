const Book = require('../models/Book');

// GET /api/books
exports.getAllBooks = async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
};

// GET /api/books/:id
exports.getBookById = async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  res.json(book);
};

// POST /api/books (ADMIN)
exports.createBook = async (req, res) => {
  const { title, author, stock } = req.body;

  if (!title || !author) {
    return res.status(400).json({
      message: 'Title dan Author tidak boleh kosong'
    });
  }

  const book = await Book.create({ title, author, stock });
  res.json(book);
};

// PUT /api/books/:id (ADMIN)
exports.updateBook = async (req, res) => {
  await Book.update(req.body, {
    where: { id: req.params.id }
  });
  res.json({ message: 'Data buku berhasil diupdate' });
};

// DELETE /api/books/:id (ADMIN)
exports.deleteBook = async (req, res) => {
  await Book.destroy({
    where: { id: req.params.id }
  });
  res.json({ message: 'Buku berhasil dihapus' });
};
