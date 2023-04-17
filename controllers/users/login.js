const bcrypt = require('bcrypt');
const User = require('../../models/user');
const RequestError = require('../../helpers/RequestError');

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(401, 'Email or password is wrong');
  }

  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw RequestError(401, 'Email or password is wrong');
  }
  const token = 'vsdvkjdhfwdf.234dsfsdv.asdfjhf';

  res.json({
    token,
    user: {
      email,
      subscriptios: user.subscription,
    },
  });
};

module.exports = login;
