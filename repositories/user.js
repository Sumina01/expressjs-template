const User = require("../models/user");

const createUser = async (user) => {
  await User.create(user)
    .then((res) => {
      console.log("res", res);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

const getUsers = async () => {
  await User.findAll()
    .then((res) => {
      console.log("users", res);
    })
    .catch((error) => {
      console.log("failed to get user details", error);
    });
};

const checkUserExist = async (username) => {
  await User.findAll({
    where: {
      username,
    },
  })
    .then((res) => {
      console.log("result", res);
      return res;
    })
    .catch((error) => {
      console.log("failed to get user details", error);
    });
};

module.exports = {
  createUser,
  checkUserExist,
};
