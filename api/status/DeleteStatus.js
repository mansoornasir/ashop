const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.delete("/:id", async (req, res) => {
  var { id } = req.params;
  console.log(req.params)
  var selectData = `DELETE FROM status WHERE id = '${id}'`;
  connection.query(selectData, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});


module.exports = router;