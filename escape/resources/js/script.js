jQuery(function () {
	/* Sticky navigation */
	$('.js--app').waypoint(function (direction) {
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}

	}, {
		offset: 115
	});
	
	
		//navigation scroll

	// Select all links with hashes
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
				}
			}
		});

	
	/* Animation on scroll */
	
	$('.js--app').waypoint(function(direction){
		$('.js--wp-1').addClass('animated bounceInUp');
	}, {
		offset: '100%'
	});
	
	$('.js--app').waypoint(function(direction){
		$('.js--wp-2').addClass('animated flash');
	}, {
		offset: '50%'
	});
	
	$('.js--careers').waypoint(function(direction){
		$('.js--wp-3').addClass('animated bounceInLeft');
	}, {
		offset: '50%'
	});
	
		$('.js--about-us').waypoint(function(direction){
		$('.js--wp-4').addClass('animated bounce');
	}, {
		offset: '50%'
	});
	
	$('#home').waypoint(function(direction){
	$('.js--wp-5').addClass('animated bounceInLeft');
	}, {
		offset: '50%'
	});
	
	
	$('.js--nav-icon').click(function(){
		var nav = $('.js--nav-bar');
		var icon = $('.js--nav-icon i');
		nav.slideToggle(200);
		
		if(icon.hasClass('ion-navicon-round'))
			{
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
			}
		else{
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
		}
		
	});
});
