var list = document.querySelectorAll('li');
var color;
for (let i = 0; i < list.length; i++){
	list[i].onmouseenter = function(){
		let j = 0;
		while (j < list.length){
			list[j++].className = '';
		}
		list[i].className = 'active';
		list[i].style.borderColor = color;
	}
}
list.forEach(elements =>{
	elements.addEventListener('mouseenter',function(event){
		let bg = document.querySelector('body');
		color = event.target.getAttribute('data-color');
		bg.style.background = color;
	})
})

function helloSpan(){
	let emjoiList = ["❤️涩涩❤", "😢悲伤😢", "🖐️好冲🖐️", "😤傲慢😤", "🤠野性🤠"];
	let num = Math.floor((Math.random() * 5));
	var sese = document.getElementById('hello_span');
	sese.innerHTML = emjoiList[num];
}