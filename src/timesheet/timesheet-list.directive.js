angular.module('TimesheetListDirective', []).directive('timesheetList', timesheetList);

function timesheetList() {
  return {
    restrict: 'E',
    templateUrl: '/timesheet/timesheet-list.html'
  };
};