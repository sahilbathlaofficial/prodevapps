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


// $("#portfolio-grid-card").click(function() {
//     $("body").css('overflow','hidden');
// });

// $("#btn-career1").click(function() {
//     $("#career1").css('display', 'unset');
//     $("body").css('overflow','hidden');
// });

// $("#career-close1").click(function(){
//     $("#career1").css('display', 'none');
//     $("body").css('overflow','unset');
// });

// $("#btn-career2").click(function() {
//     $("#career2").css('display', 'unset');
//     $("body").css('overflow','hidden');
// });

// $("#career-close2").click(function(){
//     $("#career2").css('display', 'none');
//     $("body").css('overflow','unset');
// });

// $("#btn-career3").click(function() {
//     $("#career3").css('display', 'unset');
//     $("body").css('overflow','hidden');
// });

// $("#career-close3").click(function(){
//     $("#career3").css('display', 'none');
//     $("body").css('overflow','unset');
// });

// $("#bt-close-video").click(function() {
//     $("#video").css('display', 'none');
//     $("body").css('overflow','unset');
// });

$("#landing-animation").ready(function() {
    var sw = $(document).width();
    var time = '';
    $(".animated-section").fadeIn(2000)
    if (sw> 600) {
        time = "3s"
        setTimeout(function() {
            $(".animated-text").css('transform', 'translate(0, -50vw)');
            $(".animated-text").css('transition', `${time}`);
            setTimeout(function() {
                $("#landing-animated-section").fadeOut(1500)
            }, 1000);
        }, 100);
        
    }
    else {
        time = "3s"
        setTimeout(function() {
            $(".animated-text").css('transform', 'translate(0, -50vw)');
            $(".animated-text").css('transition', `${time}`);
            setTimeout(function() {
                $("#landing-animated-section").fadeOut(1500)
            }, 1000);
        }, 100);
    }
    
});




$("body").scroll(function() {
    console.log('dl;dl')
});

    $(function() {
        $('#slider').carouFredSel({
            width: '100%',
            align: false,
            items: 3,
            items: {
                width: $('#wrapper').width() * 0.10,
                height: 500,
                visible: 1,
                minimum: 1
            },
            scroll: {
                items: 1,
                timeoutDuration : 15000,
                onBefore: function(data) {
    
                    //	find current and next slide
                    var currentSlide = $('.slide.active', this),
                        nextSlide = data.items.visible,
                        _width = $('#wrapper').width();
    
                    //	resize currentslide to small version
                    currentSlide.stop().animate({
                        width: _width * 0.05
                    });		
                    currentSlide.removeClass( 'active' );
    
                    //	hide current block
                    data.items.old.add( data.items.visible ).find( '.slide-block' ).stop().fadeOut();					
    
                    //	animate clicked slide to large size
                    nextSlide.addClass( 'active' );
                    nextSlide.stop().animate({
                        width: _width * 0.9
                    });						
                },
                onAfter: function(data) {
                    //	show active slide block
                    data.items.visible.last().find( '.slide-block' ).stop().fadeIn();
                }
            },
            onCreate: function(data){

    
                //	clone images for better sliding and insert them dynamacly in slider
                var newitems = $('.slide',this).clone( true ),
                    _width = $('#wrapper').width();

                $(this).trigger( 'insertItem', [newitems, newitems.length, false] );
    
                //	show images 
                $('.slide', this).fadeIn();
                $('.slide:first-child', this).addClass( 'active' );
                $('.slide', this).width( _width * 0.05 );
    
                //	enlarge first slide
                $('.slide:first-child', this).animate({
                    width: _width * 0.9
                });
    
                //	show first title block and hide the rest
                $(this).find( '.slide-block' ).hide();
                $(this).find( '.slide.active .slide-block' ).stop().fadeIn();
            }
        });
    
        //	Handle click events
        $('#slider').children().click(function() {
            $('#slider').trigger( 'slideTo', [this] );
        });
    
        //	Enable code below if you want to support browser resizing
        $(window).resize(function(){
            var slider = $('#slider'),
                _width = $('#wrapper').width();
    
            //	show images
            slider.find( '.slide' ).width( _width * 0.05 );
    
            //	enlarge first slide
            slider.find( '.slide.active' ).width( _width * 0.9 );
    
            //	update item width config
            slider.trigger( 'configuration', ['items.width', _width * 0.05] );
        });

    });


