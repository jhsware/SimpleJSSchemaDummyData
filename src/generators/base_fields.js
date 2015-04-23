'use strict';
/*

    To use this input widget adapter you need to register it with your
    adapter registry.

*/
var createAdapter = require('component-registry').createAdapter;

var ITextField = require('isomorphic-schema').interfaces.ITextField;
var IIntegerField = require('isomorphic-schema').interfaces.IIntegerField;

/* FIELD DUMMY DATA ADAPTERS */

var IFieldDummyData = require('../interfaces').IFieldDummyData;

var TextField = createAdapter({
    implements: IFieldDummyData,
    adapts: ITextField,
    
    generate: function () {
        return 'This is a string...'
    }
});

module.exports.TextField = TextField;

var IntegerField = createAdapter({
    implements: IFieldDummyData,
    adapts: IIntegerField,
    
    generate: function () {
        return 25
    }
});

module.exports.IntegerField = IntegerField;
