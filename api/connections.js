const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "ashopoma_a-shop",
    user: "ashopoma_a_shop",
    password: "MBcv7CRpKET7mbc",
    connectionLimit: 15,
        queueLimit: 30,
        acquireTimeout: 1000000
  });
  connection.connect(function (err) {
    if (err) {
      // mysqlErrorHandling(connection, err);
      console.log(
        "\n\t *** Cannot establish a connection with the database. ***"
      );
  
      // connection = reconnect(connection);
    } else {
      console.log("\n\t *** New connection established with the database. ***");
    }
  });

  module.exports = connection;