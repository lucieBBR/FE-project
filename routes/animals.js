var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET users listing. */

// router.get("/", (req, res) => {
//   // Send back the full list of items
//   db("SELECT * FROM animals ORDER BY id ASC;")
//     .then(results => {
//       res.send(results.data);
//     })
//     .catch(err => res.status(500).send(err));
// });


/* Helper function which allows you to get the query filter which you can later append to your 
  SELECT * FROM animals WHERE... statement
*/

function makeWhereFromFilters(query) {
  let searchWord = '';

  if (query.name) {
      searchWord += `common_name= '${query.name}' `;
  }

  return searchWord;
}



/* GET animals. */

router.get("/", async (req, res) => {
  /* Send back the full list of items if you are not searching for a particular animal. */

  let sql = 'SELECT * FROM animals';
  let where = makeWhereFromFilters(req.query)

  /* If you are searching for a particular animal, get all the columns of that animal by
  adding the WHERE clause to your SELECT * FROM animals statement */
  
  if(where) {
    sql += ` WHERE ${where}`;
  }

  
  /* Use the sql statement to get the data from your database
  */

  db(sql)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});
module.exports = router;
