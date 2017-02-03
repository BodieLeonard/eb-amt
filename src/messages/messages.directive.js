angular.module('MessagesDirective', ['AnimateService']).directive('appMessages', appMessages);

function appMessages(animateService) {
  var animate = animateService;

  return {
    restrict: 'E',
    templateUrl: '/messages/messages.html',
    scope: this,
    link: function(scope,elem,attr,as){
      scope.pageTitle = 'Assignment Management Tool';

    }
  };
};