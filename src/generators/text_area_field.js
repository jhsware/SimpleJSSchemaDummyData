'use strict';
/*

    To use this input widget adapter you need to register it with your
    adapter registry.

*/
var createAdapter = require('component-registry').createAdapter;

var ITextAreaField = require('isomorphic-schema').interfaces.ITextAreaField;

/* FIELD DUMMY DATA ADAPTERS */

var IFieldDummyData = require('../interfaces').IFieldDummyData;

var TextDummyDataAdapter = createAdapter({
    implements: IFieldDummyData,
    adapts: ITextAreaField,
    
    generate: function () {
        return 'This is a text area... \n With line breaks yo!';
    }
});

module.exports.TextAreaDummyDataAdapter = TextDummyDataAdapter;