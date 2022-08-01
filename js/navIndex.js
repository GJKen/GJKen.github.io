var body = document.body.style;

// 导航 icon 动画
var list = document.querySelectorAll('.list');
list.forEach(elements =>{
	elements.addEventListener('mouseenter',(event)=>{
		let color = event.target.dataset.color;
		let style = event.target.style;
		style.borderRight = '3px solid'+color;
		body.background = color;
	})
	elements.addEventListener('mouseleave',(event)=>{
		let color = event.target.dataset.color;
		event.target.removeAttribute('style');
		body.removeAttribute('style');
	})
})

// 随机文字函数
function helloSpan(){
	let emjoiList = ["❤️涩涩❤️", "😢悲伤😢", "🖐️好冲🖐️", "😤傲慢😤", "🤠野性🤠"];
	let num = Math.floor((Math.random() * 5));
	var sese = document.getElementById('hello_span');
	sese.innerHTML = emjoiList[num];
}