// schemas/user/user.js

//Joi with date extension
const Joi = require('@hapi/joi')
    .extend(require('@hapi/joi-date'));


module.exports = Joi.object().keys(
    {
        idUser: Joi.number().integer(),
        username: Joi.string(),
        firstname: Joi.string(),
        lastname: Joi.string(),
        email: Joi.string().email(),
        userBirthday: Joi.date().format('YYYY-MM-DD'),
    });
