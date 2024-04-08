const Achievement = require("../../Schema/Achievement");
const User = require("../../Schema/User");

const read = async (req, res, next) => {
  // console.log('req.profile', req);
  const id = req.params.userId;
  console.log(id);
  const user = await User.findById(id);

  const followersData = await Promise.all(user.followers.map(async (followerId) => {
    return await User.findById(followerId);
  }));

  const followingData = await Promise.all(user.following.map(async (followerId) => {
    return await User.findById(followerId);
  }));

  const achievementsData = await Promise.all(user.achievements.map(async (AchievementId) => {
    return await Achievement.findById(AchievementId);
  }));

  const userDataWithFollowers = {
    ...user.toObject(), // Convert user to plain JavaScript object
    followersData: followersData,
    followingData: followingData,
    achievementsData: achievementsData,
  };

  console.log(userDataWithFollowers);
  res.json(userDataWithFollowers);
};

module.exports = read;
