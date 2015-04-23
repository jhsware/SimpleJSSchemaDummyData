'use strict';
/*

    To use this input widget adapter you need to register it with your
    adapter registry.

*/
var createAdapter = require('component-registry').createAdapter;

var IEmailField = require('isomorphic-schema').interfaces.IEmailField;
var IFieldDummyData = require('../interfaces').IFieldDummyData;

var EmailField = createAdapter({
    implements: IFieldDummyData,
    adapts: IEmailField,
    
    generate: function () {
        return 'info@email.com'
    }
});

module.exports.EmailField = EmailField;
