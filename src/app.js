angular.module('eb',
  [
    'ngRoute',
    'appRoutes',
    'HomeCtrl',
    'HeaderCtrl',
    'TimesheetCtrl',
    'TimesheetService',
    'TimesheetListDirective',
    'HeadeDirective'
  ]);


angular.module('appRoutes', []).config(
  ['$routeProvider',
    '$locationProvider',
    function ($routeProvider, $locationProvider) {

      $routeProvider
        .when('/', {
          templateUrl: 'home/home.html',
          controller: 'homeController as home'
        })
        .when('/branches', {
          templateUrl: 'timesheet/timesheet.html',
          controller: 'timesheetController as ts'
        })
      $locationProvider.html5Mode(true);
    }
  ]
);