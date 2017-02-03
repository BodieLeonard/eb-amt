angular.module('AnimateService', []).factory('animateService', [
  function () {

    var vm = this;

    function onOpenSidebar(element) {
      var mainContent = document.getElementById('body');
      var domElement = document.getElementById(element);
      domElement.style.right = '0';
      domElement.style.transition = 'right .3s ease';
      mainContent.style.overflowY = 'hidden';
      domElement.style.overflowY = 'auto';
    };

    function onPreLoad() {
      document.getElementById('preloader').style.opacity = '1';
    };

    function onLoaded() {
      document.getElementById('preloader').style.opacity = '0';

    };

    function onRowFocus(event) {
      var selectedRow = event.target.parentElement.parentElement.parentElement;
      var allRows = document.getElementsByClassName('time-row');
      var i;
      for (i = 0; i < allRows.length; i++) {
        allRows[i]['style'].opacity = .2;
      }
      ;
      selectedRow.style.opacity = '1';
    };

    function onRowFocusOut() {
      var allRows = document.getElementsByClassName('time-row');
      var i;
      for (i = 0; i < allRows.length; i++) {
        allRows[i]['style'].opacity = 1;
      }
      ;
    };


    function onCloseSidebar() {
      var mainContent = document.getElementById('body');
      var notes = document.getElementById('notes');
      var notesBulk = document.getElementById('notes-bulk');
      var messages = document.getElementById('messages');
      var messagesBulk = document.getElementById('messages-bulk');
      var paycodeBulk = document.getElementById('paycode-bulk');
      notes.style.right = '-355px';
      notes.style.transition = 'right .6s ease';
      messages.style.right = '-355px';
      messages.style.transition = 'right .3s ease';
      mainContent.style.overflowY = 'auto';
      notes.style.overflowY = 'auto';
      messages.style.overflowY = 'auto';
      notesBulk.style.right = '-355px';
      notesBulk.style.transition = 'right .6s ease';
      notesBulk.style.overflowY = 'auto';
      messagesBulk.style.right = '-355px';
      messagesBulk.style.transition = 'right .6s ease';
      messagesBulk.style.overflowY = 'auto';
      paycodeBulk.style.right = '-355px';
      paycodeBulk.style.transition = 'right .6s ease';
      paycodeBulk.style.overflowY = 'auto';

    };

    function onCloseBranches() {
      var branchesSearch = document.getElementById('branches-search');
      var branches = document.getElementById('branches');
      branchesSearch.style.opacity = '0';
      branchesSearch.style.transition = '.2s ease-in';
      branches.style.top = '-203px';
      branches.style.transition = 'top .2s ease-in';
    };

    function onCloseHomeBranches() {
      var branchesSearch = document.getElementById('branches-search');
      var branches = document.getElementById('branches');
      branches.style.opacity = '0';
      branchesSearch.style.opacity = '0';
    };

    function onShowDDBranches(domElements) {
      domElements.opacityOn = '1';
      domElements.opacityOff = '0';
      domElements.opacitySpeed = 'opacity .2s';
      domElements.branchList.style.opacity = domElements.opacityOn;
      domElements.branchList.style.transition = domElements.opacitySpeed + ' ease-out';
      domElements.searchElement.style.opacity = domElements.opacityOn;
      domElements.searchElement.style.transition = domElements.opacitySpeed + ' ease-out';
      domElements.branches.style.top = '0px';
      domElements.branches.style.transition = 'top .2s ease-out';
    };

    function onHideDDBranches(domElements) {
      domElements.opacityOn = '1';
      domElements.opacityOff = '0';
      domElements.opacitySpeed = 'opacity .2s';
      domElements.searchElement.style.opacity = domElements.opacityOff;
      domElements.searchElement.style.transition = domElements.opacitySpeed + ' ease-in';
      domElements.branches.style.top = '-203px';
      domElements.branches.style.transition = 'top .2s ease-in';
    };

    function onFocus(domElement) {
      document.getElementById(domElement).focus();
    };

    function onExtraDetails(num) {
      var extraDetails = document.getElementById('extra-details-' + num);
      var extra = document.getElementById('extra-' + num);

      if (extraDetails.style.opacity.length === 0) {
        extraDetails.style.opacity = '1';
        extra.style.height = '200px';

      } else {
        extraDetails.style.opacity = null;
        extra.style.height = '70px';
      }
      ;
    };

    return {
      onOpenSidebar: onOpenSidebar,
      onPreLoad: onPreLoad,
      onLoaded: onLoaded,
      onRowFocus: onRowFocus,
      onRowFocusOut: onRowFocusOut,
      onCloseSidebar: onCloseSidebar,
      onCloseBranches: onCloseBranches,
      onCloseHomeBranches: onCloseHomeBranches,
      onShowDDBranches: onShowDDBranches,
      onHideDDBranches: onHideDDBranches,
      onFocus: onFocus,
      onExtraDetails: onExtraDetails
    }

  }]);