// schemas/game/game.js

//Joi with date extension
const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));



module.exports = Joi.object().keys(
    {
      fkUserIsM: Joi.number().integer().required(),
      fkClubIsM: Joi.number().integer().required(),
      endSubsctiption: Joi.date().format('YYYY-MM-DD').required(),
      isAdmin: Joi.boolean().required(),
    });
