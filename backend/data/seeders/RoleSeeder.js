require('dotenv').config();
// const db = require('../../Config/dbconfig');
const role = require('../../Models/RoleModel');
const roles = require('../factories/Rolefactorie');
//commande :npm run roles:import
role.insertMany(roles);
user.insertMany(users);
console.log('Data Imported');





