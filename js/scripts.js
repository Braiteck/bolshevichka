$(() => {
	// Основной слайдер на главной
	$('.main_slider .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: true,
		dots: true,
		loop: true,
		smartSpeed: 750,
		// autoplay: true,
		autoplayTimeout: 5000,
		navText: ['<span></span>', '<span></span>'],
		onTranslate: (event) => {
			$(event.target).trigger('stop.owl.autoplay')
		},
		onTranslated: (event) => {
			$(event.target).trigger('play.owl.autoplay', [4250, 0])
		}
	})


	// Акции
	$('.stocks .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 750,
		navText: ['<span></span>', '<span></span>']
	})


	// Статьи
	$('.articles .slider').owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 500,
		navText: ['<span></span>', '<span></span>'],
		responsive: {
			0: {
				items: 1,
				margin: 20
			},
			768: {
				items: 2,
				margin: 25
			},
			1024: {
				items: 3,
				margin: 30
			}
		},
		onInitialized: (event) => {
			setTimeout(() => {
				$(event.target).find('.owl-nav button').css('top', ($(event.target).find('.thumb').outerHeight() / 2))
			}, 100)
		},
		onResized: (event) => {
			setTimeout(() => {
				$(event.target).find('.owl-nav button').css('top', ($(event.target).find('.thumb').outerHeight() / 2))
			}, 100)
		}
	})


	// Товар в избравное
	$('.product .favorite_btn').click(function (e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			// добавление
			$(this).toggleClass('active')
		} else {
			// удаление
			$(this).toggleClass('active')
		}
	})


	// Товар в корзину
	$('.product .buy_btn').click(function (e) {
		e.preventDefault()
	})


	// Таймер
	$('.timer .val').each(function () {
		const timerDate = $(this).data('date')

		$(this).countdown(timerDate, function (event) {
			$(this).find('.days').text(event.strftime('%D'))
			$(this).find('.hours').text(event.strftime('%H'))
			$(this).find('.minutes').text(event.strftime('%M'))
			$(this).find('.seconds').text(event.strftime('%S'))
		})
	})
})