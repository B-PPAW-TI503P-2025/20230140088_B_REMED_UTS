const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookController');
const { adminOnly } = require('../middleware/roleMiddleware');

router.get('/', controller.getAllBooks);
router.get('/:id', controller.getBookById);
router.post('/', adminOnly, controller.createBook);
router.put('/:id', adminOnly, controller.updateBook);
router.delete('/:id', adminOnly, controller.deleteBook);

module.exports = router;
