'use strict';

var exportAllFrom = function (requiredModule) {
    for (var key in requiredModule) {
        module.exports[key] = requiredModule[key];
    }    
};

exportAllFrom(require('./base_fields'));
exportAllFrom(require('./email_field'));
exportAllFrom(require('./select_field'));
exportAllFrom(require('./text_area_field'));