const gitAvatar = require("github-like-avatar-generator");

exports.gitAvatarGenerator = (req, res, next) => {
  console.log(`/middleware/avatar.js working`);
  const avatar = gitAvatar({
    blocks: 6,
    width: 100,
  });
  res.locals.user.avatar = avatar;
  next();
};
