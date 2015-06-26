// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

	(function () {
		'use strict';

		/* ==============================================
  	Testimonial Slider
  	=============================================== */

		$('a.page-scroll').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top - 40
					}, 900);
					return false;
				}
			}
		});

		/*====================================
		Show Menu on Book
		======================================*/
		$(window).bind('scroll', function () {
			var navHeight = $(window).height() - 100;
			if ($(window).scrollTop() > navHeight) {
				$('.navbar-default').addClass('on');
			} else {
				$('.navbar-default').removeClass('on');
			}
		});

		$('body').scrollspy({
			target: '.navbar-default',
			offset: 80
		})

		$(document).ready(function () {
			var time = 5; // time in seconds

			var $progressBar,
				$bar,
				$elem,
				isPause,
				tick,
				percentTime;
			$("#team").owlCarousel({
				items: 6,
				navigation: false, // Show next and prev buttons
				slideSpeed: 300,
				paginationSpeed: 400,
				autoHeight: true,
				itemsCustom: [
				        [0, 1],
				        [450, 3],
				        [600, 3],
				        [700, 3],
				        [1000, 3],
				        [1200, 3],
				        [1400, 3],
				        [1600, 3]
				      ],
			});
			$("#team2").owlCarousel({
				items: 6,
				navigation: false, // Show next and prev buttons
				slideSpeed: 300,
				paginationSpeed: 400,
				autoHeight: true,
				itemsCustom: [
				        [0, 1],
				        [450, 3],
				        [600, 3],
				        [700, 3],
				        [1000, 3],
				        [1200, 3],
				        [1400, 3],
				        [1600, 3]
				      ],
			});

			$("#galeria").owlCarousel({
				slideSpeed: 500,
				paginationSpeed: 500,
				singleItem: true,
				afterInit: progressBar,
				afterMove: moved,
				startDragging: pauseOnDragging,
				autoHeight: true,
				autoWidth: true
			});

			function progressBar(elem) {
				$elem = elem;
				//build progress bar elements
				buildProgressBar();
				//start counting
				start();
			}

			//create div#progressBar and div#bar then prepend to $("#owl-demo")
			function buildProgressBar() {
				$progressBar = $("<div>", {
					id: "progressBar"
				});
				$bar = $("<div>", {
					id: "bar"
				});
				$progressBar.append($bar).prependTo($elem);
			}

			function start() {
				//reset timer
				percentTime = 0;
				isPause = false;
				//run interval every 0.01 second
				tick = setInterval(interval, 10);
			};

			function interval() {
				if (isPause === false) {
					percentTime += 1 / time;
					$bar.css({
						width: percentTime + "%"
					});
					//if percentTime is equal or greater than 100
					if (percentTime >= 100) {
						//slide to next item
						$elem.trigger('owl.next')
					}
				}
			}

			//pause while dragging
			function pauseOnDragging() {
				isPause = true;
			}

			//moved callback
			function moved() {
				//clear interval
				clearTimeout(tick);
				//start again
				start();
			}

			$("#clients").owlCarousel({

				navigation: false, // Show next and prev buttons
				slideSpeed: 300,
				paginationSpeed: 400,
				autoHeight: true,
				itemsCustom: [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 5],
				        [1400, 5],
				        [1600, 5]
				      ],
			});

			$("#testimonial").owlCarousel({
				navigation: false, // Show next and prev buttons
				slideSpeed: 300,
				paginationSpeed: 400,
				singleItem: true
			});

		});

		/*====================================
    Portfolio Isotope Filter
    ======================================*/
		$(window).load(function () {
			var $container = $('#lightbox');
			$container.isotope({
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			$('.cat a').click(function () {
				$('.cat .active').removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				});
				return false;
			});

		});



	}());


}
main();
