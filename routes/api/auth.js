const express = require('express');

const router = express.Router();

const { validateBody, isvalidId } = require('../../middlewares');
const schemas = require('../../schemas');

router.post('/register', validateBody(schemas.registerSchema));

module.exports = router;
