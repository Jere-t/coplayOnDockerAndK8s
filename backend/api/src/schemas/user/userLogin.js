// schemas/user/userLogin.js

//Joi with date extension
const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

module.exports = Joi.object().keys(
    {
        idUser: Joi.number().integer(),
        username: Joi.string(),
        passwordHash: Joi.string(),
        firstname: Joi.string(),
        lastname: Joi.string(),
        email: Joi.string().email(),
        userBirthday: Joi.date().format('YYYY-MM-DD'),
        IsMember: Joi.object().keys({
          fkUser: Joi.number().integer(),
          fkClub: Joi.number().integer(),
          endSubsctiption: Joi.date().format('YYYY-MM-DD'),
          isAdmin: Joi.boolean(),
        }),
        Club: Joi.object().keys({
          idClub: Joi.number().integer(),
          nameClub: Joi.string(),
          address: Joi.string(),
          fkCity: Joi.number().integer(),
        }),
    });
