'use strict';
/**
* file: isVideoVisibleOrNot.html
* purpose: Er min video synlig nu?
**/

// scroll-eventlistener
window.addEventListener("scroll", function() {
console.log('scroll ...'); // test

// hvis erJegHer er synlig, så ...
if (elFllVsbl(videoDoc)) {
console.log(elFllVsbl(videoDoc)); // test

if (!(doc.curentTime > 0)) {
doc.load(); // load the video
doc.play(); // play audio
}
} else {
console.log(elFllVsbl(videoDoc)); // test
doc.pause();
doc.currentTime = 0; // rewind the sound
}
})

// funktionen tester om videoen er synlig
// og returnerer true eller false
function elFllVsbl(el) {
return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}