const burger = document.querySelector('.burger');
if (burger) {
	const nav = document.querySelector('.header__nav');
	burger.addEventListener('click', function (e) {
		document.body.classList.toggle('lock');
		burger.classList.toggle('burger_active');
		nav.classList.toggle('header__nav_active');
	});
};