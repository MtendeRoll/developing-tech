const { Post } = require("../models");

const postdata = [
  {
    id: 4,
    title: "Donec posuere metus vitae ipsum.",
    body: "Morbi non quam nec dui luctus rutrum.",
    created_at: "2022-07-16T18:08:06.000Z",
    user: {
      username: "andrea",
    },
  },
  {
    id: 5,
    title: "Morbi non quam nec dui luctus rutrum.",
    body: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    created_at: "2022-07-15T18:08:06.000Z",
    user: {
      username: "benji",
    },
  },
  {
    id: 6,
    title: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    body: "Nunc purus",
    created_at: "2022-07-14T18:08:06.000Z",
    user: {
      username: "carlos",
    },
  },
  {
    id: 7,
    title: "Nunc purus.",
    body: "Pellentesque eget nunc.",
    created_at: "2022-07-13T18:08:06.000Z",
    user: {
      username: "deonte",
    },
  },
  {
    id: 8,
    title: "Pellentesque eget nunc.",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    created_at: "2022-07-12T18:08:06.000Z",
    user: {
      username: "earl",
    },
  },
  {
    id: 9,
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    body: "Donec posuere metus vitae ipsum.",
    created_at: "2022-07-11T18:08:06.000Z",
    user: {
      username: "fantasia",
    },
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
