
// schemas/game/game.js

//Joi with date extension
const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));



module.exports = Joi.object().keys(
    {
      User: Joi.object().keys({
        idUser: Joi.number().integer(),
        username: Joi.string(),
        firstname: Joi.string(),
        lastname: Joi.string(),
        email: Joi.string().email(),
        userBirthday: Joi.date().format('DD.MM.YYYY'),
      }),
      Game: Joi.object().keys({
        idGame: Joi.number().integer(),
        fkPlayground: Joi.number().integer(),
        isSingle: Joi.boolean(),
        isPrivate: Joi.boolean(),
        duration: Joi.number().integer(),
        startDate: Joi.date().format('YYYY-MM-DD'),
        startTime: Joi.date().format('HH:mm'),
      }),
    });
