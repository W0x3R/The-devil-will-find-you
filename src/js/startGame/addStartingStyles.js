import { playStartGameSounds } from "../sounds/playStartGameSounds"

const rules = document.querySelector('.rules')
export const startGameButton = document.querySelector('.play')
export const book = document.querySelector('.book')
const bookStar = document.querySelector('.book__star')
const bookEllipse = document.querySelector('.book__ellipse')

export const addStartingStyles = () => {
	startGameButton.classList.add('play_active');
	book.classList.add('book_visible')
	book.classList.add('book_shake')
	bookStar.classList.add('book__star_active');
	bookEllipse.classList.add('book__ellipse_active')
	rules.remove()
	playStartGameSounds()
}