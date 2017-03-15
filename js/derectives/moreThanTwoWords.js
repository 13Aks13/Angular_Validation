angular.module('testApp').directive('moreThanTwoWords', function($q, $timeout) {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.moreThanTwoWords = function(modelValue, viewValue) {
                if(modelValue && modelValue.split(' ').length >= 2) {
                    return true;
                }
                else {
                    return false;
                }
            };
        }
    };
});