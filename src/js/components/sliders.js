function reviews() {
	const slides = document.querySelectorAll('.review');
	const swiper_wrapper = document.createElement('div');
	swiper_wrapper.className = 'swiper-wrapper';
	for (let slide of slides) {
		slide.classList.toggle('swiper-slide');
		slide.replaceWith(swiper_wrapper);
		swiper_wrapper.appendChild(slide);
	}
	const swiper_container = document.createElement('div');
	swiper_container.className = 'swiper swiper-reviews';
	swiper_wrapper.replaceWith(swiper_container);
	swiper_container.appendChild(swiper_wrapper);
	const swiper_reviews = new Swiper('.swiper-reviews', {
		spaceBetween: 15,
		slidesPerView: 1.25,
		breakpoints: {
			320: {
				slidesPerView: 1.1,
			},

			480: {
				slidesPerView: 1.4,
			},
		},
	});

}


function mobileOnly() {
	const swiper_benefits = new Swiper('.swiper-benefits', {
		spaceBetween: 0,
		slidesPerView: 'auto',
	});

	const swiper_catalog_cat = new Swiper('.swiper-catalog-cat', {
		spaceBetween: 0,
		slidesPerView: 'auto',
	});

	const swiper_catalog_dog = new Swiper('.swiper-catalog-dog', {
		spaceBetween: 0,
		slidesPerView: 'auto',
	});
}

const swiper_news = new Swiper('.swiper-news', {
	//centeredSlides: true,
	spaceBetween: 30,
	pagination: {
		clickable: true,
		el: ".swiper-pagination",
	},
	breakpoints: {
		320: {
			slidesPerView: 1.1,
			spaceBetween: 20,
			centeredSlides: false,

		},

		992: {
			slidesPerView: 2.1,
			spaceBetween: 30,
		}
	}
});


