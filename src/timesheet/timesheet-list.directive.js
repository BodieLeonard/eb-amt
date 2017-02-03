angular.module('TimesheetListDirective', ['AnimateService']).directive('timesheetList', timesheetList);

function timesheetList(animateService) {
  var animate = animateService;

  return {
    restrict: 'E',
    templateUrl: '/timesheet/timesheet-list.html',
    scope: this,
    link: function(scope,elem,attr,as){
      scope.pageTitle = 'Assignment Management Tool';
      scope.imgPathMessageActive = '/assets/images/flag-deactive.png';
      scope.imgPathMessage = '/assets/images/flag-deactive.png';
      scope.imgPathNoteActive = '/assets/images/note-deactive.png';
      scope.imgPathNote = '/assets/images/note-deactive.png';
      scope.imgPathDetails = '/assets/images/details-deactive.png';
      scope.onShowMessage = function(timesheet) {
        animate.onOpenSidebar('messages');
      }

      scope.onShowNotes = function(timesheet) {
      }

      scope.onShowDetails = function(timesheet) {
      }
    }
  };
};