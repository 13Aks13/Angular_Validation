angular.module('testApp').directive('contactInfo', [function() {
	return {
		restrict: "E",
		replace: false,
		scope: {
			contact: "=infoData"
		},
		template: [
			'<p>Your name: {{contact.name}}</p>',
			'<p>Your password: {{contact.password}}</p>',
			'<p>Your email: {{contact.email}}</p>',
			'<p>Your agree: {{contact.agree}}</p>',
		].join(""),
		link: function(scope, elm, attrs, ctrl) {

		}
	}
}]);