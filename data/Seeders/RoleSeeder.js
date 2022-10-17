require('dotenv').config();
const db = require('../../Config/dbconfig');
const role = require('../../Models/RoleModel');
const roles = require('../factories/Rolefactorie');

console.log(roles)

//remplire table roles 
//commande :npm run roles:import

		 role.insertMany(roles);

		console.log('Data Imported');
		process.exit();




