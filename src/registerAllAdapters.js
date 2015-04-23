'use strict';
var generators = require('./generators');

module.exports = function (registry) {
    console.log('Registering Field Dummy Data Adapters');
    
    for (var key in generators) {
        registry.adapterRegistry.registerAdapter(generators[key]);
    }
};