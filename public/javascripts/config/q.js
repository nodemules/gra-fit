{
  /* global angular */
  angular
    .module('Application')
    .config(($qProvider) => {
      //this fixes the unhandled rejection error ui-router is throwing but we should investigate further -jr
      $qProvider.errorOnUnhandledRejections(false);
    });
}
