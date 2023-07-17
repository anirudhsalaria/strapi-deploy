'use strict';

/**
 * cnc service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cnc.cnc');
