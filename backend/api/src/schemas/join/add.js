// schemas/game/game.js

//Joi with date extension
const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));



module.exports = Joi.object().keys(
    {
      fkUserJoin: Joi.number().integer().required(),
      fkGameJoin: Joi.number().integer().required(),
    });
