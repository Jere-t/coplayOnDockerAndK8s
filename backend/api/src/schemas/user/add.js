// schemas/user/add.js

//Joi with date extension
const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));



module.exports = Joi.object().keys(
    {
        username: Joi.string().max(100).min(2).required(),
        passwordHash: Joi.string().max(255).min(2).required(),
        firstname: Joi.string().max(255).min(2).required(),
        lastname: Joi.string().max(255).min(2).required(),
        email: Joi.string().email({ minDomainSegments: 2 }).max(255).min(2).required(),
        userBirthday: Joi.date().format('YYYY-MM-DD'),
    });
