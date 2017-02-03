angular.module('HomeCtrl', []).controller('homeController', homeController);

homeController.$inject = ['$scope'];

function homeController($scope) {

  const vm = this;
  vm.pageTitle = 'Assignment Management Tool';

}
