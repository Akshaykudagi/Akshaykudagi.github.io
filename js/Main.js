//function for owl carousel slider
function slider(){
	jQuery('.slider').owlCarousel({
		loop:true,
		animateOut:'fadeOut',
		singleItem : true,
		nav:true,
		stagePadding: 50,
		items:2,
		dots:false,
		margin:0,
		autoplay:true,
		autoplayHoverPause:false,
		smartSpeed: 450,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 2
			}
		}
	});
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})	

}
function scrollposition(){
	$(document).on("click",".scroll-top",function(){
		$('html,body').animate({scrollTop: 0}, 500);

	});

}
function respMenu(){
 $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });
}	

$(document).ready(function(){
	slider();
	scrollposition();
	respMenu();
	
	
 });
 
