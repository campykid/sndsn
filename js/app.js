(function  () {
	
	var app = {
		
		initialize : function  () {
			this.workTest();
			this.menuSlide();
		},
		
		workTest : function  () {
			console.log('app was started');
		},

		menuSlide : function () {
			var button = $('.menu');
			var closeButton = $('.glyphicon-remove');
			var header = $('.header');
			var navmenu = $('.nav-bar');
			var open = false;
			
			button.click(function(){
				animate(open);
			});
			
			closeButton.click(function(){
				animate(true);
			});

			var animate = function(bool) {
				
				 if (bool == false) {
					 {
						header.animate({
						left : "285px"
					}, 200);

					navmenu.animate({
					left : "0px"
					}, 200)
					};
					open = true;
				}
				else {
					header.animate({
					left : "0px"
					}, 200);

					navmenu.animate({
					left : "-285px"
					}, 200)
					open = false;
				}
			}
			
				
			

				
			
			
			
				
			
		}
	}

	$(document).ready(app.initialize());

}());