// schemas/user/checkLogin.js

const Joi = require('@hapi/joi');

module.exports = Joi.object().keys(
    {
        username: Joi.string().max(100).min(2).required(),
        passwordHash: Joi.string().max(255).min(2).required(),
        idClub: Joi.number().integer().required(),
    });
