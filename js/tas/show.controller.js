angular
  .module('tas')
  .controller('ShowController', ShowController);

function ShowController($routeParams, taFactory) {
  var vm = this,
      id = $routeParams.uuid;

  taFactory.findOne(id, function (ta) {
    vm.ta = ta;
  });
}


//   .controller ('ShowController', function ($routeParams, $http) { //rout Params this is how you can access your uuid
//     var vm = this,
//         id = $routeParams.uuid;       //whatever you write in line 15 where uuid is this will be here

//     $http
//       .get('https://angular-demo-tas.firebaseio.com/tas/' + id + '.json')
//       .success(function (data) {
//         vm.ta = data;
//       })
//   })