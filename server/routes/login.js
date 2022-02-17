const login = async (req, res) => {
  console.log(`signin working`);
  const user = res.locals.user;
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  res.status(200).send(user.accessToken);
};

module.exports = login;
