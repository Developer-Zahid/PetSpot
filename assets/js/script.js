(function ($) {
    "use strict"

	$(window).on('load', function () {
        preLoader();
		headerHeightFixer();
    });

	/*  Preloader init */
	function preLoader(){
		$(".preloader").delay(1000).fadeOut("slow");
	}

	//  Fixed Header
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > $('header').innerHeight() + 20) {
			$(".header").addClass("header--fixed");
		} else {
			$(".header").removeClass("header--fixed");
		}
	});

	// scroll top
	$(".scroll-top").on("click", function () {
		$("html,body").animate(
			{
				scrollTop: 0,
			},50,
		);
	});
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 200) {
			$(".scroll-top").fadeIn();
		} else {
			$(".scroll-top").fadeOut();
		}
	});

	// Fix Header Height function
    function headerHeightFixer(){
		$('header').before('<div class="header-height-fix"></div>');
    	$('.header-height-fix').css('height', $('header').innerHeight() - 2 +'px');
	};

	/* Closes responsive menu when a navbar link is clicked */
	$(".nav-link, .dropdown-item").on("click", function (e) {
		if( $(this).hasClass("dropdown-toggle") ){
			e.preventDefault();
		}else{
			$(".navbar-collapse").collapse("hide");
			$(".navbar-toggler").removeClass("hide");
			$("html").removeClass("overflow-hidden");
			$('.offCanvasMenuCloser').removeClass('show');
		}
	});
	$('.navbar-toggler').on('click', function () {
        $(this).toggleClass('hide');
        $("html").toggleClass('overflow-hidden');
        $('.offCanvasMenuCloser').toggleClass('show');
    });
    $('.offCanvasMenuCloser').on('click', function () {
        $(this).removeClass('show');
        $(".navbar-toggler").removeClass("hide");
        $("html").removeClass("overflow-hidden");
    });

	$('.modal-body__color-list .modal-body__color-item').on('click', function () {
        $(".modal-body__color-item").removeClass("active");
        $(this).addClass("active");
    });

	/*  Bootstrap form validation */
	(function() {
        window.addEventListener('load', function() {
          var forms = document.getElementsByClassName('needs-validation');
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
    })();

    /*  Banner slider init */
	$(".banner__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7000,
		speed: 800,
		arrows: true,
		prevArrow: '<button class="slick__arrows slick__arrows--left border-0 d-inline-flex align-items-center justify-content-center position-absolute"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button class="slick__arrows slick__arrows--right border-0 d-inline-flex align-items-center justify-content-center position-absolute"><i class="fas fa-chevron-right"></i></button>',
		dots: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		infinite: true,
		fade: true,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true
				}
			},
		]
	});

    /*  Banner slider init */
	$(".xzoom-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 800,
		arrows: true,
		prevArrow: '<button class="slick__arrows slick__arrows--left border-0 d-inline-flex align-items-center justify-content-center position-absolute"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button class="slick__arrows slick__arrows--right border-0 d-inline-flex align-items-center justify-content-center position-absolute"><i class="fas fa-chevron-right"></i></button>',
		dots: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		infinite: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
		]
	});

    /*  Banner slider init */
	$(".choice-slider").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 800,
		arrows: true,
		prevArrow: '<button class="slick__arrows slick__arrows--left border-0 d-inline-flex align-items-center justify-content-center position-absolute"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button class="slick__arrows slick__arrows--right border-0 d-inline-flex align-items-center justify-content-center position-absolute"><i class="fas fa-chevron-right"></i></button>',
		dots: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		infinite: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
		]
	});

    // // veno box
    // $('.venobox').venobox({
    //     bgcolor    : '#ffffff',
    //     spinner    : 'three-bounce',
    //     border     : '10px',
    //     frameheight: '82vh',
    // });

	/*  XZoom init */
	(function() {
		$('.xzoom, .xzoom-gallery').xzoom({
			tint: '#252729',
			Xoffset: 30,
			fadeOut: true,
		});
		$('.xzoom2, .xzoom-gallery2').xzoom({
			tint: '#252729',
			Xoffset: 30,
			fadeOut: true,
		});
		$('.xzoom3, .xzoom-gallery3').xzoom({
			tint: '#252729',
			Xoffset: 30,
			fadeOut: true,
		});
	})();

	/*  Input Spinner init */
	(function() {
		$(".input-spinner__input").inputSpinner();
	})();

	/*  Fixed Slick Slider in Modal */
	$('#collar-popup-modal, #harness-popup-modal, #leash-popup-modal').on('shown.bs.modal', function () {
		$('.choice-slider').resize();
		$('.xzoom-slider').resize();
	});

	// Get thead titles from Responsive Cart Table and append those into tbody table data items as a "data-title" attribute
	$(".responsive-table__body__text--product").attr("data-title", $(".responsive-table__head__title--product").text())
	$(".responsive-table__body__text--price").attr("data-title", $(".responsive-table__head__title--price").text())
	$(".responsive-table__body__text--quantity").attr("data-title", $(".responsive-table__head__title--quantity").text())
	$(".responsive-table__body__text--total").attr("data-title", $(".responsive-table__head__title--total").text())

})(jQuery);