'use strict';

(() => {
  angular.module('eb')
  .component('dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: DashboardController,
    controllerAs: 'vm'
  });

  DashboardController.$inject = [];

  function DashboardController() {
    const vm = this;

  }
})();
