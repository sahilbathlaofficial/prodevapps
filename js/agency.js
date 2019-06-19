/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

$("#btn-career1").click(function() {
    $("#career1").css('display', 'unset');
    $("body").css('overflow','hidden');
});

$("#career-close1").click(function(){
    $("#career1").css('display', 'none');
    $("body").css('overflow','unset');
});

$("#btn-career2").click(function() {
    $("#career2").css('display', 'unset');
    $("body").css('overflow','hidden');
});

$("#career-close2").click(function(){
    $("#career2").css('display', 'none');
    $("body").css('overflow','unset');
});

$("#btn-career3").click(function() {
    $("#career3").css('display', 'unset');
    $("body").css('overflow','hidden');
});

$("#career-close3").click(function(){
    $("#career3").css('display', 'none');
    $("body").css('overflow','unset');
});