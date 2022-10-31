require('dotenv').config();
const db = require('../../Config/dbconfig');
const role = require('../../Models/UserModel');
const user = require('../../Models/RoleModel');
const roles = require('../factories/Rolefactorie');
const users = require('../factories/UserFactorie');

//commande :npm run roles:import
role.insertMany(roles);
// user.insertMany(users);

console.log('Data Imported');





