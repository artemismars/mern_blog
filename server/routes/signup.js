const signup = async (req, res) => {
  try {
    console.log(`signup working`);
    res
      .status(202)
      .json(
        `${res.locals.user.email}로 이메일 인증 링크가 전송되었습니다. 이메일 인증 링크는 5분 후 폐기됩니다.`
      );
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = signup;
