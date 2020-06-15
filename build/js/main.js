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
	$('.header nav ul li').click(function(){
		if($(window).width() > 1023){
			$('.header nav ul li').removeClass('active')
			$(this).addClass('active')
		}
		
	})

	$(document).mouseup(function (e){ // событие клика по веб-документу
		if($(window).width() > 1023){
			var div = $(".header__level2"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
			    && div.has(e.target).length === 0) { // и не по его дочерним элементам
				$('.header nav ul li').removeClass('active')
			}
		}
	});


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
})