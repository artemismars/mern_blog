const gitAvatar = require("github-like-avatar-generator");

exports.gitAvatarGenerator = (req, res, next) => {
  const avatar = gitAvatar({
    blocks: 6,
    width: 100,
  });
  res.locals.user.avatar = avatar;
  next();
};
