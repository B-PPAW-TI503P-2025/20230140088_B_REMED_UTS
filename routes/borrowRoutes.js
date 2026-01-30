const express = require('express');
const router = express.Router();
const { userOnly } = require('../middleware/roleMiddleware');
const { borrowBook } = require('../controllers/borrowController');

router.post('/', userOnly, borrowBook);
module.exports = router;
