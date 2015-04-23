'use strict';
/*

    To use this input widget adapter you need to register it with your
    adapter registry.

*/
var createAdapter = require('component-registry').createAdapter;

var ISelectField = require('isomorphic-schema').interfaces.ISelectField;

/* FIELD DUMMY DATA ADAPTERS */

var IFieldDummyData = require('../interfaces').IFieldDummyData;

var SelectField = createAdapter({
    implements: IFieldDummyData,
    adapts: ISelectField,
    
    generate: function () {
        return this.context.options[0].name;
    }
});

module.exports.DummyDataAdapter = SelectField;