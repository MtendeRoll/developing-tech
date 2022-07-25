const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

Post.belongsTo(User, {
  foreignKey: "user_id",
  //onDelete: "CASCADE",
  //onDelete: "SET NULL",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  //onDelete: "CASCADE",
  //onDelete: "SET NULL",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  //onDelete: "CASCADE",
  //onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  //onDelete: "CASCADE",
  //onDelete: "SET NULL",
});

User.hasMany(Post, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

module.exports = {
  User,
  Comment,
  Post,
};
