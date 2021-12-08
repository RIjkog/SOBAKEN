const videoBlock = document.querySelector('.video');


if (videoBlock) {
	const video = videoBlock.querySelector('video');
	const playBtn = videoBlock.querySelector('.video__button');

	playBtn.addEventListener('click', () => {
		video.play();
		video.controls = true;
		playBtn.classList.add('video__button_played');
	});

	video.onpause = function () {
		video.controls = false;
		playBtn.classList.remove('video__button_played');
	};

}