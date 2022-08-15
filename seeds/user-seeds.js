const { User } = require("../models");
const bcrypt = require("bcrypt");

const userdata = [
  {
    username: "andrea",
    password: bcrypt.hashSync("password123", 8),
  },
  {
    username: "benji",
    password: bcrypt.hashSync("password123", 8),
  },
  {
    username: "carlos",
    password: bcrypt.hashSync("password123", 8),
  },
  {
    username: "deonte",
    password: bcrypt.hashSync("password123", 8),
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
