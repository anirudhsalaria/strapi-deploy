'use strict';

/**
 * dbm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dbm.dbm');
