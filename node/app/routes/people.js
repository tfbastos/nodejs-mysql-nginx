const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/people-list', (req, res) => {
  const sql = 'SELECT * FROM people';
  db.query(sql, (err, data) => {
    if (err) throw err;
    res.render('people-list', { title: 'Lista de pessoas', userData: data });
  });
});

module.exports = router;
