const devil = document.querySelector('.devil');
const playButton = document.querySelector('.play');
let width = 100;

function getCenterOfWidth() {
	return (document.documentElement.getBoundingClientRect().width / 2);
}

function getCenterOfHeight() {
	return (document.documentElement.getBoundingClientRect().height / 2);
}

function getHeightOfDevil() {
	return (devil.getBoundingClientRect().height);
}

function loadPageSound() {
	new Audio("start-music.mp3").play()
}

playButton.addEventListener('click', function () {
	setInterval(() => {
		width += 0.5
		devil.style.width = width + 'px'
		devil.style.left = getCenterOfWidth() - width / 2 + 'px'
		devil.style.bottom = getCenterOfHeight() - getHeightOfDevil() / 2 + 'px'
	}, 200);

})