angular.module('TimesheetCtrl', ['TimesheetService']).controller('timesheetController', timesheetController);

timesheetController.$inject = ['$scope', 'timesheetService'];

function timesheetController($scope, timesheetService) {
  const vm = this;

  vm.pageTitle = 'Assignment Management Tool';

  vm.baseUrl = '';
  vm.sharedFolderUrl = '';
  vm.exportExcelUrl = '';
  vm.timesheets = [];
  vm.orderBy = 'lastName';
  vm.sort = 'descending';
  vm.imgPathAddEmployee = vm.baseUrl + 'assets/images/btn-plus.png';
  vm.imgPathFilterColumn = vm.baseUrl + 'assets/images/arrow-down-square-white.png';

  vm.chkProperties = [
    'chkReconStatus',
    'chkTimecardChannel',
    'chkPayCodeDescription'
  ];
  vm.chkReconStatus = [
    {label: 'Received', state: false, name: 'received'},
    {label: 'Expected', state: false, name: 'expected'},
    {label: 'Failed', state: false, name: 'failed'},
    {label: 'Complete', state: false, name: 'complete'}
  ];
  vm.chkTimecardChannel = [
    {label: 'Time Entry', state: false, name: 'timentry'},
    {label: 'TC', state: false, name: 'tc'},
    {label: 'Bridge', state: false, name: 'bridge'},
    {label: 'People Net', state: false, name: 'people-net'},
    {label: 'Time Metrics', state: false, name: 'TYMETRICS'}
  ];
  vm.chkPayCodeDescription = [
    {label: 'Received', state: false, name: 'received'},
    {label: 'Failed', state: false, name: 'failed'},
    {label: 'Complete', state: false, name: 'complete'}
  ];
  vm.sortByOptions = [
    {label: 'Select Sort Option', name: 'default'},
    {label: 'Department', name: 'departmentName'},
    {label: 'OT Multiplier', name: 'otMultiplier'},
    {label: 'Billing Location', name: 'billingLocation'},
    {label: 'Worksite', name: 'worksitelocation'},
    {label: 'Job Code', name: 'jobCode'},
    {label: 'Unused Assignments', name: 'unusedAssignments'}
  ];
  vm.sortByModel = vm.sortByOptions[0];

  timesheetService.get().then(function (resp) {
    if (resp) {
      vm.timesheets = resp.data;
    } else {

    }
  }, function (err) {

    console.log(err);
  });

}
