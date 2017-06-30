    // * Inside `burger.js`, import `orm.js` into `burger.js`

    // * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

    // * Export at the end of the `burger.js` file.

var orm = require("../config/orm.js");

orm.selectAll("*", "burgers", "id");

orm.insertOne("burgers", "burger_name", "devoured", "Turkey Burger", "false");

orm.updateOne("burgers", "burger_name", "Cheeseburger", 3);


module.exports = burgers.js
