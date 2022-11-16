require('dotenv').config();
// const db = require('../../Config/dbconfig');
const user = require('../../Models/UserModel');
const role = require('../../Models/RoleModel');
const roles = require('../factories/Rolefactorie');
const users = require('../factories/UserFactorie');

//commande :npm run roles:import
role.insertMany(roles);
user.insertMany(users);

// user.insertMany(users);
console.log(role);
console.log(user);


console.log('Data Imported');





