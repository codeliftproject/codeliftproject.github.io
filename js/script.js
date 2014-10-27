(function($) {
  "use strict";

//------------------------------------- Waiting for the entire site to load ------------------------------------------------//

jQuery(window).load(function() {
		jQuery("#loaderInner").fadeOut();
		jQuery("#loader").delay(400).fadeOut("slow");
});

$(document).ready(function(){

//------------------------------------- Navigation setup ------------------------------------------------//


//------------------------------------- Navigation setup ------------------------------------------------//


    $(".mainNav li ul li:has(ul)").find("a:first").append(" &raquo; ");
	$('.mainNav li').on('mouseover', function(){
									$(this).children('ul.dropDown').stop(true,true).fadeIn(200);
									$(this).children('ul.dropDown').css( "display", "block" );
							}).on('mouseleave', function(){
								$(this).children('ul.dropDown').stop(true,true).fadeOut(200);
							});


//------------------------------------- End navigation setup ------------------------------------------------//




$('a.scroll').smoothScroll({
        speed: 800,
        offset: -74
});

//------------------------------------- End navigation setup ------------------------------------------------//



//---------------------------------- Main slider setup-----------------------------------------//

$('.mainSlider').flexslider({
	animation: "fade",
	slideshow: true,
	directionNav:false,
	controlNav: true,
	animationSpeed: 1500
});


$('.mainSlider .slides li').css('height', $(window).height());


for(var i = 0; i < $('.mainSlider .slides li').length; i++){

    var path = $('.mainSlider .slides li').eq(i).find('img.slide').attr('src');
	$('.mainSlider .slides li').eq(i).addClass('parallax');
    $('.mainSlider .slides li').eq(i).css('backgroundImage', 'url("' + path + '")');
    $('.mainSlider .slides li').eq(i).find('img.slide').detach();



}


$(document).scroll(function () {

        var treshhold = Math.round($(window).scrollTop() / 5);
        $('li.parallax').css('backgroundPosition', '100% ' + treshhold + 'px');
});


//---------------------------------- End main slider setup-----------------------------------------//





//---------------------------------- Site slider-----------------------------------------//


$('.testiSlider').flexslider({
	animation: "slide",
	slideshow: true,
	directionNav:false,
	controlNav: true
});



$('.clientSlider').flexslider({
	animation: "slide",
	slideshow: true,
	directionNav:false,
 	itemWidth: 53,
    itemMargin: 0,
    minItems: 2,
    maxItems: 6,
	controlNav: false
});



$('.postSlider, .postSliderLarge, .projectSlider').flexslider({
	animation: "slide",
	slideshow: true,
	directionNav:false,
	controlNav: true
});


$('.owl-slider').owlCarousel({
    loop: true,
	nav:false,
    responsiveClass: true,
    responsive: {
     0: {
       items: 1,
     },
     600: {
       items: 2,
       nav: false
     },
     1000: {
       items: 3,
       loop: true,
     }
   }
});





//---------------------------------- End site slider-----------------------------------------//



//---------------------------------- Parallax-----------------------------------------//

$(".testimonials, .process").parallax("100%", 0.3);
$(".facts").parallax("100%", 0.3);


//---------------------------------- End parallax -----------------------------------------//


//---------------------------------- Facts animation-----------------------------------------//

$('.facts').appear(function() {
	$(".count").each(function() {
	var counter = $(this).html();
	$(this).countTo({
		from: 0,
		to: counter,
		speed: 2000,
		refreshInterval: 10,
		});
	});
});

//----------------------------------  End facts animations -----------------------------------------//



//---------------------------------- Portfolio -----------------------------------------//

$(".itemDesc, .latestDesc, .teamDesc, .prjLink").css({ opacity: 0 });

$('.teamDesc').hover( function(){
	$(this).stop().animate({ opacity: 1 }, 'slow');
	$('.teamDescL').stop().animate({ opacity: 0 }, 'slow');
}, function(){
	$(this).stop().animate({ opacity: 0 }, 'slow');
	$('.teamDescL').stop().animate({ opacity: 1 }, 'slow');
});



//--------------------------------- Hover animation for the elements of the portfolio --------------------------------//


$('.itemDesc, .latestDesc, .prjLink').hover( function(){
	$(this).stop().animate({ opacity: 1 }, 'slow');
}, function(){
	$(this).stop().animate({ opacity: 0 }, 'slow');
});

	$('.itemDesc, .latestDesc, .prjLink').hover(function () {
    var projDesc = $(this).find('.itemDesc, .latestDesc, .prjLink');
    var offset = ($(this).height() / 2) - (projDesc.height() / 2);
    $(this).find('.itemDescInner, .latestDescInner, .prjLinkInner').css('padding-top', offset -30);
});


//--------------------------------- End hover animation for the elements of the portfolio --------------------------------//

//-----------------------------------Initilaizing magnificPopup for the portfolio-------------------------------------------------//
$('.folio').magnificPopup({
					  type: 'image'
					});


					$('.popup-youtube, .popup-vimeo').magnificPopup({
						disableOn: 700,
						type: 'iframe',
						mainClass: 'mfp-fade',
						removalDelay: 160,
						preloader: false,

						fixedContentPos: false
					});


//-----------------------------------End initilaizing fancybox for the portfolio-------------------------------------------------//

	//--------------------------------- Sorting portfolio elements with quicksand plugin  --------------------------------//

		var $portfolioClone = $('.portfolio').clone();

		$('.filter a').click(function(e){
			$('.filter li').removeClass('current');
			var $filterClass = $(this).parent().attr('class');
			if ( $filterClass == 'all' ) {
				var $filteredPortfolio = $portfolioClone.find('li');
			} else {
				var $filteredPortfolio = $portfolioClone.find('li[data-type~=' + $filterClass + ']');
			}
			$('.portfolio').quicksand( $filteredPortfolio, {
				duration: 800,
				easing: 'easeInOutQuad'
			}, function(){
					$('.itemDesc').hover( function(){
						$(this).stop().animate({ opacity: 1 }, 'slow');
					}, function(){
						$(this).stop().animate({ opacity: 0 }, 'slow');
					});

						$('.itemDesc').hover(function () {
					    var projDesc = $(this).find('.itemDesc');
					    var offset = ($(this).height() / 2) - (projDesc.height() / 2);
					    $(this).find('.itemDescInner').css('padding-top', offset -30);
					});




//------------------------------ Reinitilaizing fancybox for the new cloned elements of the portfolio----------------------------//



			$('.folio').magnificPopup({
								  type: 'image'
								});


								$('.popup-youtube, .popup-vimeo').magnificPopup({
									disableOn: 700,
									type: 'iframe',
									mainClass: 'mfp-fade',
									removalDelay: 160,
									preloader: false,

									fixedContentPos: false
								});


//-------------------------- End reinitilaizing fancybox for the new cloned elements of the portfolio ----------------------------//

			});


			$(this).parent().addClass('current');
			e.preventDefault();
		});

//--------------------------------- End sorting portfolio elements with quicksand plugin--------------------------------//


//---------------------------------- End portfolio-----------------------------------------//





//---------------------------------- Form validation-----------------------------------------//




$('#submit').click(function(){

	$('input#name').removeClass("errorForm");
	$('textarea#message').removeClass("errorForm");
	$('input#email').removeClass("errorForm");

	var error = false;
	var name = $('input#name').val();
	if(name == "" || name == " ") {
		error = true;
		$('input#name').addClass("errorForm");
	}


		var msg = $('textarea#message').val();
		if(msg == "" || msg == " ") {
			error = true;
			$('textarea#message').addClass("errorForm");

		}

	var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	var email = $('input#email').val();
	if (email == "" || email == " ") {
		$('input#email').addClass("errorForm");
		error = true;
	}else if (!email_compare.test(email)) {
		$('input#email').addClass("errorForm");
		error = true;
	}

	if(error == true) {
		return false;
	}

	var data_string = $('.contactForm form, .replyForm form').serialize();


	$.ajax({
		type: "POST",
		url: $('.contactForm form, .replyForm form').attr('action'),
		data: data_string,

		success: function(message) {
				if(message == 'SENDING'){
					$('#success').fadeIn('slow');
				}
				else{
					$('#error').fadeIn('slow');
				}
					}

	});

	return false;
});



//---------------------------------- End form validation-----------------------------------------//



//--------------------------------- Mobile menu --------------------------------//


var showHideBtn = $('.showHideBtn a');
	var nav = $('.mainNav');
	var navHeight= nav.height();

$(showHideBtn).click(function(e) {
		e.preventDefault();
		nav.slideToggle();


});


//--------------------------------- End mobile menu --------------------------------//

//---------------------------------- Instagram feed -----------------------------------------//

jQuery.fn.spectragram.accessData={
	accessToken:'305801553.467ede5.94e8f22591af44eea81bdbd1ca3bff04',
	clientID:'e659391279a64365a13bfb26b4caf15d'}

$('.instaFeed').spectragram('getUserFeed', {
		query: 'insideenvato', //Change the instagram feed user to display the feed that you want.
		size: 'small',
		max: 11
});


//---------------------------------- End instagram feed -----------------------------------------//

//--------------------------------- Prevent default--------------------------------//

$('.logoSingle a').click(function(e){
	e.preventDefault();

});

//--------------------------------- End prevent default --------------------------------//


//--------------------------------- Random images-------------------------------//

$(function() {
    var randomImg = ['r1.jpg', 'r2.jpg', 'r3.jpg', 'r4.jpg', 'r5.jpg', 'r6.jpg'];
    $('.imgTS').css({'background-image': 'url(images/teaserImages/' + randomImg[Math.floor(Math.random() * randomImg.length)] + ')'});
   });

//--------------------------------- End random images--------------------------------//



});

})(jQuery);
