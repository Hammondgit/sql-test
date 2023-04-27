var express = require('express');
var router = express.Router();
var dbConn = require('../lib/mysqldb');

// display dog info

router.get('/', function (req, res, next) {
    dbConn.query('SELECT * FROM dog', function (err, rows) {
        if (err) {
            req.flash('error', err);
            // render to views/dogs/index.ejs
            res.render('dogs', { data: '' });
        } else {
            // render to views/dogs/index.ejs
            res.render('dogs', { data: rows });
        }
    });
});

module.exports = router;