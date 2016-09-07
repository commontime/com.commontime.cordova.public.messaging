var argscheck = require('cordova/argscheck'), exec = require('cordova/exec');

module.exports = {
  start: function (successCallback, errorCallback, options) {
    cordova.exec(successCallback, errorCallback, "ZUMO", "start", [options]);
  },
  logout: function (successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "ZUMO", "logout", []);
  },
  setAuthenticationOptions: function (successCallback, errorCallback, options) {
    cordova.exec(successCallback, errorCallback, "ZUMO", "setAuthenticationOptions", [options]);
  }
}
;
