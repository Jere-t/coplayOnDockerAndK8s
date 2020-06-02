// schemas/courtType/courtType.js

const Joi = require('@hapi/joi');

module.exports = Joi.object().keys(
    {
        idCourtType: Joi.number().integer(),
        courtType: Joi.string(),
        isIndoor: Joi.boolean(),
    });
