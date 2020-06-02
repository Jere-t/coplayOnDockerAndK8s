// schemas/country/country.js

const Joi = require('@hapi/joi');

module.exports = Joi.object().keys(
    {
        id: Joi.number().integer(),
        country: Joi.string(),
    });
