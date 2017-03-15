angular.module("testApp").factory('info', ['$timeout', function($timeout) {
    return {
  	    status_ready: function() {
            alert ('Ready !');
        },

        showUserInfo: function() {
            $timeout(this.status_ready, 500);
        }
    };
}]);