const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  // {
  //   id: 1,
  //   username: "alesmonde0",
  //   password: "password123",
  // },
  // {
  //   id: 2,
  //   username: "jwilloughway1",
  //   password: "password123",
  // },
  // {
  //   id: 3,
  //   username: "iboddam2",
  //   password: "password123",
  // },
  // {
  //   id: 4,
  //   username: "dstanmer3",
  //   password: "password123",
  // },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
