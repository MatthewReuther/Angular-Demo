angular
  .module('tas')
  .config(tasConfig);

function tasConfig($routeProvider) {
  $routeProvider
    .when('/tas', {
      templateUrl: 'js/tas/table.html',
      controller: 'TasController',
      controllerAs: 'tas'
    })
    .when('/tas/new', {
      templateUrl: 'js/tas/form.html',
      controller: 'TasController',
      controllerAs: 'tas'
    })
    .when('/tas/:uuid', {
      templateUrl: 'js/tas/show.html',
      controller: 'ShowController',
      controllerAs: 'show'
    })
    .when('/tas/:uuid/edit', {
      templateUrl: 'js/tas/form.html',
      controller: 'EditController',
      controllerAs: 'tas'
    })
    .otherwise({
      redirectTo: '/tas'
    });
}


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