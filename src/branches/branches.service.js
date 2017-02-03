angular.module('BranchesService', []).factory('branchesService', ['$http', function($http) {

  return {
    get : function() {
      return $http({
        method: 'GET',
        url: '/api/branches.json',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }

}]);