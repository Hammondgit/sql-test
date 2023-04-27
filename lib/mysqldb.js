var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Qazwsx19!",
    database: "dog_day7"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("sql works. LETS GOOOOO POG")
});

module.exports = connection;