$(function(){
	//Ефекты появления блоков
	if($(window).width() > 1023){
		new WOW().init();
	}
	

	// слайдеры
	$('.s4__slider').slick({
	  centerMode: true,
	  autoplay: true,
	  autoplaySpeed: 5000,
	  speed: 500,
	  centerPadding: '10px',
	  slidesToShow: 1,
	  prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-left'><i class='fas fa-chevron-right'></i></button>",
      responsive: [
	    {
	      breakpoint: 1023,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        centerMode: false
	      }
	    },
	   ]
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
		
	// политика конвиденциальности адаптив	
	
	function politicaAppend(){
		if($(window).width() < 1024){
			$('.politica').prependTo($('.footer__bot'));
		}
		if($(window).width() > 1023){
			$('.politica').prependTo($('.footer__conf'));
		}
	}
	politicaAppend();
	$(window).resize(function(){
		politicaAppend();
	})

	//фиксация шапки
	$(window).scroll(function(){
		if($(window).width() > 1023){
			let wScrollTop = $(window).scrollTop()
			if(wScrollTop > 1){
				$('.header').addClass('fix')
			}
			else{
				$('.header').removeClass('fix')
			}
		}
	})

	if($(window).width() > 1023){
		let wScrollTop = $(window).scrollTop()
		if(wScrollTop > 1){
			$('.header').addClass('fix')
		}
		else{
			$('.header').removeClass('fix')
		}
	}


	//клик по пункту меню
	$('.header nav ul li span').hover(function(){
		if($(window).width() > 1023){
			$('.header nav ul li').removeClass('active')
			$(this).parent('li').addClass('active')
			$('.header').addClass('m-open')
		}
		
	})
	$('.header__level2').mouseleave(function(){
		if($(window).width() > 1023){
			$('.header nav ul li').removeClass('active')
			$('.header').removeClass('m-open')
		}
	})
	


	$('.footer__menu__t').click(function(){
		if($(window).width() < 768){
			if($(this).hasClass('active') == 0){
				$('.footer__menu__t').removeClass('active')
				$('.footer__menu__c').slideUp()
				$(this).toggleClass('active')
				$(this).next().slideToggle()
			}
			else{
				$(this).toggleClass('active')
				$(this).next().slideToggle()
			}
		}
	})

	//клик пункт меню на мобильном
	$('.header nav ul li').click(function(){
		if($(window).width() < 1024){
			if($(this).find('.header__level2').css('display') != 'block'){
				$('.header__level2').slideUp()
				$(this).find('.header__level2').slideDown()
			}else{
				$(this).find('.header__level2').slideUp()
			}
		}
	})

	$('.burger').click(function(){
		if($(window).width() < 1024){
			$('.burger').toggleClass('active')
			$('.header__right__sroll').fadeToggle()
		}
	})


	//tabs
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	//feadback
	$('.feedback label').click(function(){
		$('.feedback label').removeClass('active')
		$(this).addClass('active')
		$('.feedback__content').fadeIn()
	})
})