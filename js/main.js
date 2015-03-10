angular
  .module('tas', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tas', {
        templateUrl: 'views/table.html',
        controller: 'TasController',
        controllerAs: 'tas'
      })
      .when('/tas/new', {
        templateUrl: 'views/form.html',
        controller: 'TasController',
        controllerAs: 'tas'
      })
      .when('/tas/:uuid', {
        templateUrl: 'views/show.html',
        controller: 'ShowController',
        controllerAs: 'show'
      })
      .when('/tas/:uuid/edit', {
        templateUrl: 'views/form.html',
        controller: 'EditController',
        controllerAs: 'tas'
      })
      .otherwise({
        redirectTo: '/tas'
      })
  })
  .service('taService', function ($http) {
    var tas = {};

    tas.findOne = function (id, cb) {
      $http
        .get('https://angular-demo-tas.firebaseio.com/tas/' + id + '.json')
        .success(function (data) {
          cb(data);
        });
    };

    tas.findAll = function (cb) {
      $http
        .get('https://angular-demo-tas.firebaseio.com/tas.json')
        .success(function (data) {
          cb(data);
        });
    };

    return tas;
  })
  .controller('EditController', function ($routeParams, $http, $location) {
    var vm = this,
        id = $routeParams.uuid;

    $http
      .get('https://angular-demo-tas.firebaseio.com/tas/' + id + '.json')
      .success(function (data) {
        vm.newTA = data;
      });

    tas.findOne(id, function (ta) {
      vm.newTA = ta;
    })

    vm.cohortOptions = [
      'N/A',
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
      'Ten'
    ];

    vm.addOrEditTA = function () {
      $http
        .put('https://angular-demo-tas.firebaseio.com/tas/' + id + '.json',
          vm.newTA
        )
        .success(function (data) {
          $location.path('/tas')
        });
    }

  })
  .controller('ShowController', function ($routeParams, taService) {
    var vm = this,
        id = $routeParams.uuid;

    taService.findOne(id, function (ta) {
      vm.ta = ta;
    });
  })
  .controller('TasController', function ($scope, $location, $http, taService) {
    var vm = this;

    vm.cohortOptions = [
      'N/A',
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
      'Ten'
    ];

    taService.findAll(function (tas) {
      vm.data = tas;
    })

    vm.addOrEditTA = function () {
      vm.newTA.name = 'Adam';
      vm.newTA.nickName = vm.newTA.firstName[0].toUpperCase() + 'Adam';

      $http
        .post('https://angular-demo-tas.firebaseio.com/tas.json', vm.newTA)
        .success(function (res) {
          vm.data[res.name] = vm.newTA;
          $location.path('/tas');
        });
    };

    vm.removeTA = function (id) {
      var url = 'https://angular-demo-tas.firebaseio.com/tas/' + id + '.json';
      $http
        .delete(url)
        .success(function () {
          delete vm.data[id];
        });
    };

    vm.updateTA = function (id) {
      var url = 'https://angular-demo-tas.firebaseio.com/tas/' + id + '.json';
      $http
        .put(url, vm.data[id]);
    };

  });



// angular
//   .module('tas', ['ngRoute'])    //importing first model which is ng-route give you $route and $route provider
//   .config(function ($routeProvider) {
//     $routeProvider      //setting up four routes ---routes are the actual url on a page www.google.com/images images is the route
//       .when('/tas', {
//         templateUrl: 'views/table.html', ///both accpets a path and a route
//         controller: 'TasController',
//         controllerAs: 'tas'
//       })
//       .when('/tas/new', {
//         templateUrl: 'views/form.html',
//         controller: 'TasController',
//         controllerAs: 'tas'
//       })
//       .when('/tas/:uuid', {     //dynamic route looks like regular route but they have colon and id is now a variable you can use
//         templateUrl: 'views/show.html',
//         controller: 'ShowController',
//         controllerAs: 'show'
//       })
//       .when('/tas/:uuid/edit', {
//         templateUrl: 'views/form.html',
//         controller: 'EditController',
//         controllerAs: 'tas'
//       })
//       .otherwise({
//         redirectTo: '/tas'
//       })
//   })

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

//   .controller ('ShowController', function ($routeParams, $http) { //rout Params this is how you can access your uuid
//     var vm = this,
//         id = $routeParams.uuid;       //whatever you write in line 15 where uuid is this will be here

//     $http
//       .get('https://angular-demo-tas.firebaseio.com/tas/' + id + '.json')
//       .success(function (data) {
//         vm.ta = data;
//       })
//   })

//   .controller('TasController', function ($scope, $http, $location) {
//     var vm = this;

//     vm.cohortOptions = [
//       'N/A',
//       'One',
//       'Two',
//       'Three',
//       'Four',
//       'Five',
//       'Six',
//       'Seven',
//       'Eight',
//       'Nine',
//       'Ten'
//     ];

//     // $http.put('https://angular-demo-tas.firebaseio.com/tas.json',
//     //  [
//     //   {
//     //     nickName: 'TAdam',
//     //     name: 'Adam',
//     //     firstName: 'Adam',
//     //     lastName: 'Kèésecker',
//     //     current: true,
//     //     cohort: 5
//     //   },
//     //   {
//     //     nickName: 'ZAdam',
//     //     name: 'Adam',
//     //     firstName: 'Zöe',
//     //     lastName: 'Ames',
//     //     current: true,
//     //     cohort: 6
//     //   },
//     //   {
//     //     nickName: 'JuAdam',
//     //     name: 'Adam',
//     //     firstName: 'Juan',
//     //     lastName: 'Rødrįguež',
//     //     current: true,
//     //     cohort: 6
//     //   },
//     //   {
//     //     nickName: 'BrAdam',
//     //     name: 'Adam',
//     //     firstName: 'Brian',
//     //     lastName: 'Hiått',
//     //     current: false,
//     //     cohort: 6
//     //   },
//     //   {
//     //     nickName: 'BAdam',
//     //     name: 'Adam',
//     //     firstName: 'Adam',
//     //     lastName: 'Barñhærd',
//     //     current: false,
//     //     cohort: 6
//     //   }
//     // ])

//     $http
//       .get('https://angular-demo-tas.firebaseio.com/tas.json')
//       .success(function (data) {
//         vm.data = data;
//       });

//     vm.addTA = function () {
//       vm.newTA.name = 'Adam';
//       vm.newTA.nickName = vm.newTA.firstName[0].toUpperCase() + 'Adam';

//       console.log(vm.newTA);
//       $http.post('https://angular-demo-tas.firebaseio.com/tas.json', vm.newTA)
//         .success(function (res) {
//           vm.data[res.name] = vm.newTA;
//           $location.path('/tas');
//         });
//     };

//     vm.removeTA = function (id) {
//       var url = 'https://angular-demo-tas.firebaseio.com/tas/' + id + '.json';
//       $http
//         .delete(url)
//         .success(function () {
//           delete vm.data[id];
//         });
//     };

//     vm.updateTA = function (id) {
//       var url = 'https://angular-demo-tas.firebaseio.com/tas/' + id + '.json';
//       $http
//         .put(url, vm.data[id]);
//     };

//   });