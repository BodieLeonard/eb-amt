angular.module('TimesheetService', []).factory('timesheetService', ['$http', function($http) {

  return {
    get : function() {
      return $http({
        method: 'GET',
        url: '/api/timesheets.json',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }

}]);