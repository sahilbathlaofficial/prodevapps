/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
				scaleDiv();
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
		}
		else {
			classie.remove( header, 'navbar-shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	// function scaleDiv() {
	// 	var sy = scrollY();
	// 	var sPresent = sy
	// 	let scaleIncrement = 1+ sPresent/10000;
	// 	console.log()
	// 	console.log(scaleIncrement)
	// 	let scaleDescrement = 1
	// 	if (sy >=0 && sy <700) {
	// 		$("#landing-page-container").css("transform", `scale(${scaleIncrement})`)
	// 		$("#landing-page-container").css("transition", `scale(.1s)`)
	// 	}
	// }

	init();

})();