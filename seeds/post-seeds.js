const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    body: "Morbi non quam nec dui luctus rutrum.",
    user_id: 3,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    body: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    user_id: 2,
  },
  {
    title: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    body: "Nunc purus",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
