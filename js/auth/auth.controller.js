angular
  .module('tas')
  .controller('AuthController', AuthController)

function AuthController($rootScope, $scope, $location, authFactory, BASE_URL) {
  var vm = this;

  vm.user = {};

  vm.login = function () {
    authFactory.login(vm.user, function (err, authData) {
      if (err) {
        console.log('Error logging in user:', err);
      } else {
        console.log('Logged in successfully', authData);
        $rootScope.user = authData;
        $location.path('/tas');
        $scope.$apply();
      }
    });
  };

  // vm.login = function () {
  //   var fb = new Firebase(BASE_URL);

  //   fb.authWithPassword({
  //     email:    vm.email,
  //     password: vm.password
  //   }, function (err, authData) {
  //     if (err) {
  //       console.log('Error logging in user:', err);
  //     } else {
  //       console.log('Logged in successfully', authData);
  //       $location.path('/tas');
  //       $scope.$apply();
  //     }
  //   });
  // };

  vm.register = function () {
    authFactory.register(vm.user, function (err, authData) {
      if (err && err.code === 'EMAIL_TAKEN') {
        console.log('Error creating user:', err);
        vm.login();
      } else if (err) {
        console.log('Error creating user:', err)
      } else {
        console.log('User created successfully', authData);
        vm.login();
      }
    });
  };

  // vm.register = function () {
  //   fb.createUser({
  //     email:    vm.email,
  //     password: vm.password
  //   }, function (err, authData) {
  //     if (err && err.code === 'EMAIL_TAKEN') {
  //       console.log('Error creating user:', err);
  //       vm.login();
  //     } else if (err) {
  //       console.log('Error creating user:', err)
  //     } else {
  //       console.log('User created successfully', authData);
  //       vm.login();
  //     }
  //   });
  // };


  vm.forgotPassword = function () {
    authFactory.forgotPassword(vm.user, function (err) {
      if (err) {
        console.log('Error resetting password:', err)
      } else {
        console.log('Password reset email sent successfully');
      }
    });
  };
}

//   vm.forgotPassword = function () {
//     var fb = new Firebase(BASE_URL);

//     fb.resetPassword({
//       email:    vm.email,
//       password: vm.password
//     }, function (err) {
//       if (err) {
//         console.log('Error resetting password:', err)
//       } else {
//         console.log('Password reset email sent successfully');
//       }
//     });
//   };
// }


























