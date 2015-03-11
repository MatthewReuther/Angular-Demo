angular
  .module('tas')
  .controller('TasController', TasController);

function TasController($location, taFactory, COHORT_OPTIONS) {
  var vm = this;

  vm.cohortOptions = COHORT_OPTIONS;

  taFactory.findAll(function (tas) {
    vm.data = tas;
  });

  vm.addOrEditTA = function () {
    vm.newTA.name = 'Adam';
    vm.newTA.nickName = vm.newTA.firstName[0].toUpperCase() + 'Adam';

    taFactory.create(vm.newTA, function (res) {
      $location.path('/tas');
    });
  };

  vm.removeTA = function (id) {
    taFactory.delete(id, function () {
      delete vm.data[id];
    });
  };

  vm.updateTA = function (id) {
    taFactory.update(id, vm.data[id]);
  };
}



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