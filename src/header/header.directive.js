angular.module('HeadeDirective', []).directive('appHeader', appHeader);

function appHeader() {

  return {
    restrict: 'EA',
    templateUrl: 'header/header.html',
    scope: true,
    link: function(scope,elem,attr){
      scope.pageTitle = 'Assignment Management Tool';

    }
  };
};

