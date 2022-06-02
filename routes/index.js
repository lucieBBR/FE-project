const express = require('express');
const router = express.Router();
const { ensureUserLoggedIn } = require('../middleware/guards');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

/**
 * GET /admin
 **/

 router.get('/admin-only', ensureUserLoggedIn, function(req, res) {
  res.send({ message: 'Here is your Admin content from the server...' });
});



module.exports = router;
