'use strict';

/**
 * dbm router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dbm.dbm');
