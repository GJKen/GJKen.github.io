var body = document.querySelector('body')

function hidemaindiv(){
	var btn4 = document.querySelector('#btn4')
	// document.querySelector("#inner").style.display = "none"
	// document.querySelector('#main').style.visibility = document.querySelector('#btn4').innerHTML == '❀显示❀' ? 'visible' : 'hidden'
	
}
function showmaindiv(){
	// document.querySelector('#main').style.visibility = document.querySelector('#btn4').innerHTML == '❀显示❀' ? 'visible' : 'visible'
	// document.querySelector("#inner").style.display = "block"
}

var width = window.innerWidth;
var height = window.innerHeight;
// document.querySelector('#main').style.width = width + 'px'
// document.querySelector('#main').style.height = height + 'px'
// document.querySelector('#inner').style.width = parseInt(width * 0.6) + 'px'
// document.querySelector('#inner').style.height = parseInt(height * 0.7) + 'px'
// document.querySelector('#inner2').style.height = parseInt(height * 0.6)  + 'px'
if (width < 1080) {
	body.style.fontSize = 10 + 'px'
} else if (width >= 1080 && width < 2560) {
	body.style.fontSize = 18 + 'px'
} else if (width >= 2560) {
	body.style.fontSize = 22 + 'px'
}