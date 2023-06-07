const userRepository = require("../repositoties/user");

const createUser = async (req, res) => {
  const user = req.body;
  try {
    const isUserExist = await userRepository.checkUserExist(user.username);
    if (isUserExist) {
      res
        .status(400)
        .json({
          success: false,
          message: `user with username ${user.username}  already exist `,
        });
    }
    const userId = await userRepository.createUser(user);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
};
