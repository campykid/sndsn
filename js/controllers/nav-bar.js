app.controller('nav-bar', ['$scope', function($scope) {

	$scope.navBarState = 'closed';

	$scope.toggleNavBar = function(){
		if ($scope.navBarState === 'closed') {
			$('.header').animate({
				left : "285px"
			}, 200);
			$('.nav-bar').animate({
				left : "0px"
			}, 200)
			// Set flag.
			$scope.navBarState = 'opened'
		} else {
			$('.header').animate({
				left : "0"
			}, 200);
			$('.nav-bar').animate({
				left : "-285px"
			}, 200)
			// Set flag.
			$scope.navBarState = 'closed';
		};
	}
}]);
