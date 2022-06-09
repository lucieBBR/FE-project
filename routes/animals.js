var express = require('express');
var router = express.Router();
const path = require('path');
const db = require("../model/helper");
const fs = require('fs/promises');

/* Helper function which allows you to get the query filter which you can later append to your 
  SELECT * FROM animals WHERE... statement
*/

function makeWhereFromFilters(query) {
  let searchWord = '';

  if (query.name) {
      searchWord += `common_name= '${query.name}' OR species='${query.name}'`;
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
    sql += ` WHERE ${where};`;
  }

  // SELECT * FROM animals WHERE common_name= 'elefant' OR species='vulpes vulpes'
  /* Use the sql statement to get the data from your database
  */

  db(sql)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.post("/", async (req, res) => {
// req.files is an obj with a key for each file that's uploaded
  if (!req.files || Object.keys(req.files).length === 0) {
      res.status(400).send({ error: 'No file in POST'});
      return;
  }
  let { common_name, species, situation_state, habitat } = req.body;
  let { image_src } = req.files; 
 
  let fromPath = image_src.tempFilePath;
  let toPath = path.join(__dirname, '../public/animalsimages/') + image_src.name;
           

  try {
    await fs.rename(fromPath, toPath);

    let sql = `INSERT INTO animals (common_name, species, image_src, situation_state, habitat)
    VALUES ('${common_name}', '${species}', '${image_src.name}', '${situation_state}', '${habitat}')`;

    await db(sql); // add new animal including the image (do the insert)
    let result = await db("SELECT * FROM animals");
    let animals = result.data;
    res.status(201).send(animals); // return updated array (with 201 for "new resource created")
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  let animalId = req.params.id;

  try {
      await db(`DELETE FROM animals WHERE id = ${animalId}`);  // delete animal
      result = await db('SELECT * FROM animals');
      let animals = result.data;
      res.send(animals);
      } catch (err) {
      res.status(500).send({ error: err.message });
  }
});
module.exports = router;
