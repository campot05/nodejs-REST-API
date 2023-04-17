const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../../models/user');
const RequestError = require('../../helpers/RequestError');

const { SECRET_KEY } = process.env;

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

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '23h' });

  res.json({
    token,
    user: {
      email,
      subscriptios: user.subscription,
    },
  });
};

module.exports = login;
