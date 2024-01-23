"use strict";var startWidthOfDevil,timerCheckEndGame,searchedItemSize,timerScaleDevil,container=document.querySelector(".container"),devil=document.querySelector(".devil"),startGameButton=document.querySelector(".play"),resultDisplay=document.querySelector(".result-display"),resultText=document.querySelector(".result-display__text"),newGameButton=document.querySelector(".result-display__button"),book=document.querySelector(".book"),bookStar=document.querySelector(".book__star"),bookEllipse=document.querySelector(".book__ellipse"),questionsBlock=document.querySelector(".questions"),searchedItem=document.querySelector(".pento"),pento=document.querySelectorAll(".questions__pento"),getSpeedOfSearchItem=setSpeedOfSearchItem(),mainThemeSound=new Audio("main-sound.mp3"),rulesBlock=document.querySelector(".rules__inner"),rulesText=document.querySelector(".rules__inner-text"),englishLanguageIcon=document.querySelector(".rules__inner_en"),russianLanguageIcon=document.querySelector(".rules__inner_ru"),count=0,timer=0,rulesTextObject={en:"Welcome to hell, traveler. Everyone who was here before you failed to cope with the king of hell. You are the last hope. Your goal is to collect 10 pentagrams in order to put an end to the king of hell once and for all. Good luck",ru:"Добро пожаловать в ад,путник. Все кто тут был до тебя не справились с королем ада. Ты последняя надежда. Твоя цель собрать 10 пентаграмм для того чтобы раз и навсегда покончить с королем ада. Удачи."};function initGame(){positioningBook(),window.addEventListener("resize",(function(){searchedItemSize=searchedItem.getBoundingClientRect().width,positioningBook()})),startGameButton.addEventListener("click",loadGame),newGameButton.addEventListener("click",(function(){location.reload()}))}function checkWidthIncreaseFactor(){var e=getSizeOfDisplay("height");return getSizeOfDisplay("width")<=560?1.3:e>=1e3?3.3:e<1e3&&e>=850?2.8:e<850&&e>=780?2.5:e<780&&e>=702?2.2:e<702&&e>=590?1.9:e<590&&e>=525?1.6:e<525&&e>=450?1.3:e<450?.9:void 0}function setSpeedOfSearchItem(){var e=getSizeOfDisplay("width");return e>=1400?840:e<1400&&e>=1200?820:e<1200&&e>=1100?800:e<1100&&e>=1e3?770:e<1e3&&e>=850?750:e<850?710:void 0}function delay(e){return new Promise((function(t){return setTimeout(t,e)}))}function getSizeOfDisplay(e){return document.documentElement.getBoundingClientRect()[e]}function getCenterOfDisplay(e){return getSizeOfDisplay(e)/2}function getSizeOfDevil(e){return devil.getBoundingClientRect()[e]}function getSizeOfBook(e){return book.getBoundingClientRect()[e]}function positioningBook(){book.style.left=getCenterOfDisplay("width")-getSizeOfBook("width")/2+"px",book.style.bottom=getCenterOfDisplay("height")-getSizeOfBook("height")/2+"px"}function playStartGameSounds(){new Audio("call-devil.mp3").play(),new Audio("shake-book.mp3").play()}function startGame(){startGameButton.classList.add("play_active"),book.classList.add("book_red"),bookStar.classList.add("book__star_red"),bookEllipse.classList.add("book__ellipse_red"),playStartGameSounds()}function generateSearchedItemNum(e,t){var n=Math.floor(getSizeOfDisplay([t])-e);return Math.floor(Math.random()*(n-e+1)+e)}function showDevil(){delay(8e3).then((function(){searchedItem.style.display="inline-block",searchedItemSize=searchedItem.getBoundingClientRect().width,searchedItem.style.left=generateSearchedItemNum(searchedItemSize,"width"),searchedItem.style.bottom=generateSearchedItemNum(searchedItemSize,"height"),book.classList.remove("book_red"),book.classList.add("book_hide"),devil.classList.add("devil_show"),startWidthOfDevil=getSizeOfDevil("width"),devil.style.left=getCenterOfDisplay("width")-getSizeOfDevil("width")/2+"px",devil.style.bottom=getCenterOfDisplay("height")-getSizeOfDevil("height")/2+"px",mainThemeSound.play(),setInterval((function(){searchedItem.style.left=generateSearchedItemNum(searchedItemSize,"width"),searchedItem.style.bottom=generateSearchedItemNum(searchedItemSize,"height")}),getSpeedOfSearchItem)}))}function scaleDevil(){delay(9001).then((function(){timerScaleDevil=setInterval((function(){var e=checkWidthIncreaseFactor();console.log(e),startWidthOfDevil+=e,devil.style.width=startWidthOfDevil+"px",devil.style.left=getCenterOfDisplay("width")-startWidthOfDevil/2+"px",devil.style.bottom=getCenterOfDisplay("height")-getSizeOfDevil("height")/2+"px"}),200)}))}function showResultDisplay(e,t,n){resultDisplay.classList.add(t),resultText.textContent=e,clearInterval(timerScaleDevil),newGameButton.classList.add(n),container.remove()}function loadGame(){startGame(),showDevil(),scaleDevil(),timerCheckEndGame=setInterval(checkEndOfGame,1e3),startGameButton.removeEventListener("click",loadGame)}function checkEndOfGame(){56===++timer&&(showResultDisplay("YOU DIED","result-display_loose","result-display__button_loose"),searchedItem.remove(),delay(8e3).then((function(){new Audio("losing-sound.mp3").play()})),delay(26e3).then((function(){new Audio("losing-sound.mp3").play()})),clearInterval(timerCheckEndGame))}rulesBlock.addEventListener("click",(function(e){"en"===e.target.dataset.language&&(englishLanguageIcon.style.display="none",russianLanguageIcon.style.display="block",rulesText.textContent=rulesTextObject.ru),"ru"===e.target.dataset.language&&(russianLanguageIcon.style.display="none",englishLanguageIcon.style.display="block",rulesText.textContent=rulesTextObject.en)})),searchedItem.addEventListener("click",(function(e){count<10&&(4===count&&questionsBlock.classList.add("questions__pento_shake"),new Audio("found-sound.mp3").play(),pento[count].classList.add("questions__pento_found"),++count),10===count&&(showResultDisplay("YOU SURVIVED","result-display_win","result-display__button_win"),mainThemeSound.pause(),this.remove(),delay(1e3).then((function(){new Audio("win-sound.mp3").play()})),clearInterval(timerCheckEndGame))})),initGame();