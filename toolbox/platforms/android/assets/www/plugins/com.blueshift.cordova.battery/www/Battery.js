cordova.define("com.blueshift.cordova.battery.Battery", function(require, exports, module) { var exec = require("cordova/exec");
module.exports = {
    getLevel: function(success, failure) {
        var self = this;

        exec(
            success || function() {},
            failure || function() {},
            'BatteryPlugin',
            'getLevel',
            []
        );
    }
};
});
