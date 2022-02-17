module.exports = (req, res) => {
  const user = res.locals.user;
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  res.status(200).send({ accessToken: user.accessToken });
};
