const User = require("../../Schema/User");

const read = async (req, res, next) => {
  // console.log('req.profile', req);
  const id = req.params.userId;
  console.log(id);
  const user = await User.findById(id);
  console.log(user);
  res.json(user);
};

module.exports = read;
