angular
  .module('tas')
  .factory('authFactory', authFactory)

function authFactory(BASE_URL) {
  return {
    logout: function (cb) {
      var fb = new Firebase(BASE_URL);

      fb.unauth(function () {
        cb();
      });
    }
  };
}
