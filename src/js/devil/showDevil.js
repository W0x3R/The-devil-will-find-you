import { addShowDevilStyles } from "./addShowDevilStyles";
import { centeringElement } from "../sizesAndcentering/centeringElement";
import { devil } from "./centeringDevilOnScale";
import { delay } from "../delay";
import { getSizeOfElement } from "../sizesAndcentering/getSizeOfElement";
import { movingSearchObject } from "../searchObject/movingSearchObject";
import { setStartWidthOfDevil } from "./setStartWidthOfDevil";
import { displayFoundItemsBlock } from '../displayFoundItemsBlock'
import { setSearchObjectSize } from "../searchObject/setSearchObjectSize";
import { movingSearchObjectWithInterval } from "../searchObject/movingSearchObjectWithInterval";

export const showDevil = () => {
	delay(8000).then(() => {
		addShowDevilStyles()
		setSearchObjectSize()
		movingSearchObject()
		const widthOfDevil = getSizeOfElement(devil, 'width')
		setStartWidthOfDevil(widthOfDevil)
		centeringElement(devil)
		displayFoundItemsBlock('add')
		movingSearchObjectWithInterval()
	})
}