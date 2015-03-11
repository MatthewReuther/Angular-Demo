angular
  .module('tas')
  .controller('EditController', EditController);

function EditController($routeParams, $location, taFactory, COHORT_OPTIONS) {
  var vm = this,
      id = $routeParams.uuid;

  vm.cohortOptions = COHORT_OPTIONS;

  taFactory.findOne(id, function (ta) {
    vm.newTA = ta;
  });

  vm.addOrEditTA = function () {
    taFactory.update(id, vm.newTA, function () {
      $location.path('/tas')
    });
  };
}


//   .controller ('EditController', function ($routeParams, $http) { //rout Params this is how you can access your uuid
//     var vm = this,
//         id = $routeParams.uuid;       //whatever you write in line 15 where uuid is this will be here

//     $http
//       .get('https://angular-demo-tas.firebaseio.com/tas/' + id + '.json')
//       .success(function (data) {
//         vm.newTA = data;
//       });

//     // $http
//     //   .put('https://mytas.firebaseio.com/tas/' + id + '.json')
//     //   .success(function (data) {
//     //     $location.path('/tas')
//     //   });
//   })