// schemas/game/game.js

//Joi with date extension
const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));



module.exports = Joi.object().keys(
    {
      Game: Joi.object().keys({
        idGame: Joi.number().integer(),
        Playground: Joi.object().keys({
          idPlayground: Joi.number().integer(),
          fkClub: Joi.number().integer(),
          fkSport: Joi.number().integer(),
          fkCourtType: Joi.number().integer(),
          nameCourt: Joi.string(),
          isDoubleOk: Joi.boolean(),
        }),
        User: Joi.object().keys({
          idUser: Joi.number().integer(),
          username: Joi.string(),
          firstname: Joi.string(),
          lastname: Joi.string(),
          email: Joi.string().email(),
          userBirthday: Joi.date().format('YYYY-MM-DD'),
        }),
        isSingle: Joi.boolean(),
        isPrivate: Joi.boolean(),
        duration: Joi.number().integer(),
        startDate: Joi.date().format('YYYY-MM-DD HH:mm'),
        description: Joi.string(),
        Join: Joi.object().keys({
          fkUserJoin: Joi.number().integer().required(),
          fkGameJoin: Joi.number().integer().required(),
        }),
      }),
    });
