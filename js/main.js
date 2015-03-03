angular
	.module('tas-angular-demo', [])							//named our app (tas-angular-demo) and created a module
	.controller('tasController', function ($scope)	{  		//created a controller for the app and using a callback function when executed it calles the scope of the app
	  $scope.tas = ['TAdam','ZAdam','JuAdam','BrAdam'];

	  $scope.removeTA = function(name) {
	  var index = $scope.tas.indexOf(name);
      $scope.tas.splice(index, 1);
    };
});