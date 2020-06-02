// schemas/sport/sport.js

const Joi = require('@hapi/joi');

module.exports = Joi.object().keys(
    {
        idSport: Joi.number().integer(),
        nameSport: Joi.string(),
    });
