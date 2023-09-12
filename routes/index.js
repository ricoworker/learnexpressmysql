const book = require('../controller');

const router = require('express').Router();

router.get('/books', book);
module.exports = router;
