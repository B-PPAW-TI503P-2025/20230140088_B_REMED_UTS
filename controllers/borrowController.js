const Book = require('../models/Book');
const BorrowLog = require('../models/BorrowLog');

exports.borrowBook = async (req, res) => {
  const { bookId, latitude, longitude } = req.body;
  const userId = req.headers['x-user-id'];

  if (!bookId || latitude == null || longitude == null) {
    return res.status(400).json({
      message: 'Data peminjaman tidak lengkap'
    });
  }

  const book = await Book.findByPk(bookId);

  if (!book) {
    return res.status(404).json({ message: 'Buku tidak ditemukan' });
  }

  if (book.stock <= 0) {
    return res.status(400).json({ message: 'Stok buku habis' });
  }

  // Kurangi stok
  book.stock -= 1;
  await book.save();

  // Simpan log peminjaman + lokasi
  await BorrowLog.create({
    userId,
    bookId,
    latitude,
    longitude
  });

  res.json({
    message: 'Peminjaman berhasil',
    lokasi: { latitude, longitude }
  });
};
