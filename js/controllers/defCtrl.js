angular.module("testApp").controller("defCtrl", ['$scope', 'info', function($scope, info) {
	
	window.sco = $scope;

	$scope.contacts = [];
	$scope.contact = {
		name: "Sddgvb Kpdcldo",
		password: "^%&rtE634",
		email: "Sddgvb.Kpdcld@zxs.com",
		agree: true
	};

	$scope.submit = function() {
        $scope.contacts.push($scope.contact);
        $scope.contact = {};
        $scope.frm.$setUntouched(true);
        info.showUserInfo();
    };
}]);