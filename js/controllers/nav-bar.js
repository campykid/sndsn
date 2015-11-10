app.controller('nav-bar', ['$scope', function($scope) {

	$scope.toggleNavBar = function(){
		if (!$scope.navBarState) {
			$('.header').animate({
				left : "285px"
			}, 200);
			$('.nav-bar').animate({
				left : "0px"
			}, 200)
			// Set flag.
			$scope.navBarState = true
		} else {
			$('.header').animate({
				left : "0"
			}, 200);
			$('.nav-bar').animate({
				left : "-285px"
			}, 200)
			// Set flag.
			$scope.navBarState = false;
		};
	};

	$scope.items = {
		about: 'ABOUT US',
		ourWorks: 'OUR WORKS',
		whyChoseUs: 'WHY CHOOSE US',
		ourTeam: 'OUR TEAM',
		ourSkills: 'OUR SKILLS',
		ourNews: 'OUR NEWS',
		contactUs: 'CONTACT US'
	}
}]);
