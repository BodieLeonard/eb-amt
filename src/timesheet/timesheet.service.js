angular.module('TimesheetService', []).factory('timesheetService', ['$http', '$routeParams',
  function ($http, $routeParams) {
    return {
      get: function () {

        var id = $routeParams.branchId;
        // update path to pull from id
        // example /api/branches/12345

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