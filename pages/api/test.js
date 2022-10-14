
export default function handler(req, res) {
    const sqlite = require('sqlite3').verbose()
    const db = new sqlite.Database('test.db');
    var sql = "select * from customers";
    db.all(sql, function (err, row) {
        if (err) {
            res.send(err.message)
        }
        else {
            res.status(200).json(row)
        }
    })
}
