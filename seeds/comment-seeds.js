const { Comment } = require("../models");

const commentdata = [
  {
    id: 4,
    comment_text: "Nunc rhoncus dui vel sem.",
    user_id: 6,
    post_id: 1,
    createdAt: "2022-07-16T18:03:30.000Z",
    updatedAt: "2022-07-16T18:03:30.000Z",
  },
  {
    id: 5,
    comment_text: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    user_id: 6,
    post_id: 8,
    createdAt: "2022-07-17T19:04:30.000Z",
    updatedAt: "2022-07-17T19:04:30.000Z",
  },
  {
    id: 6,
    comment_text: "Aliquam erat volutpat. In congue.",
    user_id: 3,
    post_id: 10,
    createdAt: "2022-07-18T17:05:30.000Z",
    updatedAt: "2022-07-18T17:05:30.000Z",
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
