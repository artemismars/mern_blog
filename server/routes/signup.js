console.log(`signup working`);
const signup = async (req, res) => {
  try {
    const user = res.locals.user;
    await user.save();
    res.status(202).send(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = signup;
