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