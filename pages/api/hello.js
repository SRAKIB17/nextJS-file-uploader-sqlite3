// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const express = require('express')()

export default function handler(req, res) {
  const fileUpload = require('express-fileupload');
  express.use(fileUpload())
  const sqlite = require('sqlite3').verbose();

  const db = new sqlite.Database('test.db');

  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  db.run(sql, function (err) {
    if (err) {
      console.log(err.message)
    }
    else {
      res.status(200).json(this)
    }
  })
}
