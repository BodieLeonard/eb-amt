angular.module('HomeCtrl', ['BranchesService']).controller('homeController', homeController);

homeController.$inject = ['$scope', 'branchesService', '$location'];

function homeController($scope, branchesService, $location) {

  const vm = this;
  vm.pageTitle = 'Search For A Branch';

  vm.onBranchSelect = function(branch){
    $location.path('/branch/'+branch.id);
  }

  branchesService.get().then(function (resp) {
    if (resp) {
      vm.branches = resp.data;
    } else {

    }
  }, function (err) {

    console.log(err);
  });
}
