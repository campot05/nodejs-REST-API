const express = require('express');

const router = express.Router();

const ctrlContacts = require('../../controllers/contacts');
const { ctrlWrapper } = require('../../helpers');

const { validateBody, isvalidId } = require('../../middlewares');

const schemas = require('../../schemas');

router.get('/', ctrlWrapper(ctrlContacts.listContacts));

router.get('/:contactId', isvalidId, ctrlWrapper(ctrlContacts.getContactById));

router.post(
  '/',
  validateBody(schemas.putContactsSchema),
  ctrlWrapper(ctrlContacts.addContact)
);

router.delete(
  '/:contactId',
  isvalidId,
  ctrlWrapper(ctrlContacts.removeContact)
);

router.put(
  '/:contactId',
  isvalidId,
  validateBody(schemas.putContactsSchema),
  ctrlWrapper(ctrlContacts.updateContact)
);

router.patch(
  '/:contactId/favorite',
  isvalidId,
  validateBody(schemas.updateFavorite),
  ctrlWrapper(ctrlContacts.updateStatusContact)
);

module.exports = router;
