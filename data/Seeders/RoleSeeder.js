require('dotenv').config();
const db = require('../../Config/dbconfig');
const role = require('../../Models/RoleModel');
const roles = require('../Factories/RoleFactory');


//remplire table roles 
//commande :npm run roles:import
role.insertMany(roles);
console.log('Data Imported');
	


