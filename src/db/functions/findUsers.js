const db = require("../models");

const findUsers = async (params) => {
  const { User } = db;
  let users = await User.findAll({ where: params });
  return users;
};

module.exports = {
  findUsers,
};
