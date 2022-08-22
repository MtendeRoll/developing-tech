const { User } = require("../models");
const bcrypt = require("bcrypt");

const userdata = [];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
