$(function(){
	//Ефекты появления блоков
	new WOW().init();

	// слайдеры
	$('.s4__slider').slick({
	  centerMode: true,
	  autoplay: true,
	  autoplaySpeed: 5000,
	  speed: 500,
	  centerPadding: '10px',
	  slidesToShow: 1,
	  prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-left'><i class='fas fa-chevron-right'></i></button>"
	});

	//табы
	$('.s6__head__item').click(function(){
		$('.s6__head__item').removeClass('active')
		$(this).addClass('active')
	})

	$('.s6h1').click(function(){
		$('.s6b2').removeClass('active')
		setTimeout(function(){
			$('.s6b1').addClass('active')
		}, 100)
	})
	$('.s6h2').click(function(){
		$('.s6b1').removeClass('active')
		setTimeout(function(){
			$('.s6b2').addClass('active')
		}, 100)
	})
		
	
})