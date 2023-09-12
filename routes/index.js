const router = require('express').Router();

router.get('/books', (req, res) => {
  res.json({ message: 'book router' });
});
module.exports = router;
