
window.addEventListener('load', onLoad);

function onLoad() {
	if (document.body.clientWidth <= 992) {
		reviews();
		mobileOnly();
	}
	else {
		mansory();
	}
	window.addEventListener('resize', onResize);
}

function onResize() {

	if (document.body.clientWidth > 992) {
		mansory();
	}
}




