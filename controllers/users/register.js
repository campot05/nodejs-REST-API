const User = require('../../models/user');
const RequestError = require('../../helpers/RequestError');

const register = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw RequestError(409, 'Email in use');
  }

  const newUser = await User.create(req.body);

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = register;
