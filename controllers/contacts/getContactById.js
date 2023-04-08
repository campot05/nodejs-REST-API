const contacts = require('../../models/contacts');

// const { NotFound } = require('http-errors');

const { RequestError } = require('../../helpers');

const getContactById = async (req, res) => {
  const { contactId } = req.params;

  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw RequestError(404, 'Not Found');

    //  throw new NotFound('Not found');
  }
  res.json(result);
};

module.exports = getContactById;
