const signup = async (req, res) => {
  try {
    console.log(`signup working`);
    res
      .status(202)
      .json(`${res.locals.user.email}로 이메일 인증 링크가 전송되었습니다.`);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = signup;
