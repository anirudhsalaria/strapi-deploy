'use strict';

/**
 * mit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mit.mit');
