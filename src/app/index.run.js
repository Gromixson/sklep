(function() {
  'use strict';

  angular
    .module('frontFastcrm')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
