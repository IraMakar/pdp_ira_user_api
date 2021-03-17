const db = require("../models");

const upsertUser = async (params) => {
  const { chat_id } = params;
  const { User } = db;
  let user = await User.findOne({ where: { chat_id } });
  if (!user) {
    user = await User.create(params);
  } else if (user) {
    await User.update(
      {
        ...params,
        settings: { ...(user.settings || {}), ...(params.settings || {}) },
      },
      { where: { chat_id } }
    );
    user = await User.findOne({ where: { chat_id } });
  }

  return user;
};

module.exports = {
  upsertUser,
};
