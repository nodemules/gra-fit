{
  angular
    .module('appDirectives')
    .directive('errorMessages', errorMessages)

  errorMessages.$inject = [];

  function errorMessages() {

    var template = `<ng-messages for="formElement.$error" class="help-block" role="alert">
      <div ng-message="required" class="text-danger" ng-if="formElement.$dirty">This field is required</div>
      <div ng-message="minlength" class="text-danger">This field is too short</div>
      <div ng-message="maxlength" class="text-danger">This field is too long</div>
      <div ng-message="passwordMatch" class="text-danger">Passwords do not match</div>
    </ng-messages>`;

    var directive = {
      restrict: 'E',
      template: template,
      scope: {
        formElement: '='
      }
    }

    return directive;

  }
}
