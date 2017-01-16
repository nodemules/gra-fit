{
  /* global angular */
  angular
    .module('graFitApp')
    .config(($qProvider) => {
      //this fixes the unhandled rejection error ui-router is throwing but we should investigate further -jr
      $qProvider.errorOnUnhandledRejections(false);
    });
}
