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
	

	//Акордеон в футере
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
		if($(window).width() > 767){
			$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".tab_item").hide().eq($(this).index()).fadeIn()
		}
	}).eq(0).addClass("active");

	$('.tab_mobtitle').click(function(){
		$(this).toggleClass('active')
		$(this).next('.tab_item_wrap').slideToggle()
	})


	//feadback
	$('.feedback label').click(function(){
		$('.feedback label').removeClass('active')
		$(this).addClass('active')
		$('.feedback__content').fadeIn()
	})


	//акордеон доп возможности
	$('.dopv__item').click(function(){
		if($(window).width() < 1024){
			$(this).toggleClass('active')
			$(this).find('.drop__content').slideToggle()
		}
	})


	//чекнуть чекбокс
	$('.chekbox label').click(function(){
		$(this).parents('form').toggleClass('active-check');
	})


	//всплывающая форма
	$('#formshow').click(function(){
		$('.forma1').addClass('active')
	})
	$('.closesform').click(function(){
		$('.forma1').removeClass('active')
	})


	//отправка формы
	$('.section5__btn').click(function(){
		$(this).parents('.s5__form').addClass('active')
		$('.section5__sussces').fadeIn(500)
	})


	//не активная кнопка формы
	$('.notactive .chekbox label').click(function(){
		$(this).parents('.notactive').toggleClass('active')
	})


	//автозаполнения поля по нажатию на кнопку
	$('.auto__wrap div').click(function(){
		let autotext = $(this).attr('data-text')
		$(this).parents('.auto-text').find('textarea').val(autotext)
		
	})


	//показать больше текста мультипровайдер
	$('.tab_more_text.down').click(function(){
		let thisel = $(this)
		thisel.fadeOut(200)
		thisel.closest('.tab_item_wrap').find('.multi__img').fadeOut(200)
		setTimeout(function(e){
			thisel.closest('.tab_item_wrap').find('.tab_item_more').slideDown()
		}, 200)
	})
	$('.tab_more_text.up').click(function(){
		let thisel = $(this)
		thisel.closest('.tab_item_wrap').find('.tab_more_text.down').fadeIn(200)
		thisel.closest('.tab_item_wrap').find('.tab_item_more').slideUp()
		setTimeout(function(e){
			thisel.closest('.tab_item_wrap').find('.multi__img').fadeIn(200)
			
		}, 200)
	})



	//адаптив функциональность мультипровайдер
	function multifuncresize(){
		if($(window).width() < 768){
			$('.mobMultifunc').removeClass('multifunc')
		}
		if($(window).width() > 767){
			$('.mobMultifunc').addClass('multifunc')
		}
	}

	multifuncresize();
	
	$(window).resize(function(){
		multifuncresize();
	})

	
	
})