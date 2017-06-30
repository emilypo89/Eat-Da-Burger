// 3. Create an `orm.js` file inside `config` directory.

//    * Import (require) `connection.js` into `orm.js`

//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()` 
//      * `insertOne()` 
//      * `updateOne()` 

//    * Export the ORM object in `module.exports`.
var connection = require("./connection.js");

var orm = {
	selectAll: function(whatToSelect, table, orderCol) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    // console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
    	if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(table, colOne, colTwo, colOneVal, colTwoVal){
  	var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
  	connection.query(queryString, [table, colOne, colTwo, colOneVal, colTwoVal], function(err, result){
  		if (err) throw err;
  		console.log(result);
  	});
  },
  updateOne: function(table, colName, colVal, idVal){
  	var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
  	connection.query(queryString, [table, colName, colVal, idVal], function(err, result) {
  		if (err) throw err;
  		console.log(result);
  	});
  }
}

module.exports = orm;  