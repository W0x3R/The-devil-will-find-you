import { controlGameSounds } from "./controlGameSounds"

export const playStartGameSounds = () => {
	controlGameSounds('callDevil', 'play')
	controlGameSounds('shakeBook', 'play')
	controlGameSounds('mainSound', 'play')
}