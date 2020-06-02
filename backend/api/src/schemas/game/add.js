// schemas/game/game.js

//Joi with date extension
const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));



module.exports = Joi.object().keys(
    {
      fkPlayground: Joi.number().integer().required(),
      fkUserCreator: Joi.number().integer().required(),
      isSingle: Joi.boolean().required(),
      isPrivate: Joi.boolean().required(),
      duration: Joi.number().integer().required(),
      startDate: Joi.date().required(),
      description: Joi.string(),
    });
