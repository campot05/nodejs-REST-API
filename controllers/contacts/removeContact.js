const Contact = require('../../models/contacts');

const { RequestError } = require('../../helpers');

const removeContact = async (req, res) => {
  console.log(req.params);
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  console.log(result);
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.json({
    message: 'Delete success',
  });
};

module.exports = removeContact;
