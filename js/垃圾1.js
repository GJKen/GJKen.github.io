
/*
var list = document.querySelectorAll('li');
for(let num = 0; num < list.length; num++){
	// 监听获取到的 list 列表鼠标触碰事件
	list[num].addEventListener("mouseenter",function(event){
		let bg = document.querySelector('body')
		// 获取鼠标触碰的 li 的 color
		let color = event.target.getAttribute('iconColor');
		bg.style.background = color;
	})
}
*/


/*
let list = document.querySelectorAll('li');
for (let i = 0; i < list.length; i++){
	list[i].onmouseenter = function(){
		let j = 0;
		while (j < list.length){
			list[j++].className = 'list';
		}
		list[i].className = 'list active';
	}
}
list.forEach(elements =>{
	elements.addEventListener('mouseenter',function(event){
		let bg = document.querySelector('body')
		let color = event.target.getAttribute('data-color');
		bg.style.background = color;
	})
})
*/