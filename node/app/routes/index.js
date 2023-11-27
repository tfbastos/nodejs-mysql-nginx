const router = require("express").Router();
const db = require('../database');

router.get('/', (req, res) => {

  

  const sql = `INSERT INTO people(name) values('Um nome qualquer')`;
  db.query(sql, (err, data) => {if(err) throw err;});
  res.render('index', {title:'Index', userData:'FullCycle Rocks!!!'});
});

module.exports = router;
