{
  /* global angular */
  angular
    .module('graFitDirectives')
    .directive('showErrors', showErrors);

  showErrors.$inject = ['$timeout'];

  function showErrors($timeout) {
    var directive = {
      restrict: 'A',
      require: '^form',
      link: linkFn
    }

    return directive;

    function linkFn(scope, el) {
      // find the input element, which has the 'name' attribute
      var inputEl = el[0].querySelector('[name]');
      // convert the native input element to an angular element
      var inputNgEl = angular.element(inputEl);

      // if the element has an input, watch the classes on the
      // element to determine the error state
      if (inputNgEl && inputNgEl[0]) {
        scope.$watch(() => inputNgEl[0].classList.value, (n) => {
          var classes = n.split(' ');
          el.toggleClass('has-success', classes.includes('ng-invalid-required') && classes.includes('ng-pristine'));
          el.toggleClass('has-error', classes.includes('ng-invalid') && !classes.includes('ng-pristine'));
        }, true)
      }
    }

  }

}
