var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET users listing. */

router.get("/", (req, res) => {
  // Send back the full list of items
  db("SELECT * FROM animals ORDER BY id ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get('/', async (req, res) => {
  let sql = 'SELECT * FROM animals';  // all SELECTs begin with this...
  let where = makeWhereFromFilters(req.query);  // make optional WHERE-part from query parameters
  // If query parameters were passed, append them to the SELECT statement
  if (where) {
      sql += ` WHERE ${where}`;
  }
});
module.exports = router;
