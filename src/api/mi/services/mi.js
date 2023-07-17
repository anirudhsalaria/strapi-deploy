'use strict';

/**
 * mi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mi.mi');
