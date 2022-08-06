var bodyStyle = document.body.style;

// 导航 icon 动画
var list = document.querySelectorAll('.list');
list.forEach(elements =>{
	elements.addEventListener('mouseenter',(event)=>{
		/*//获取svg的颜色
		let path = event.target.querySelector("#icon").shadowRoot.querySelector("path");
		let color = getComputedStyle(path, null).stroke;*/
		let color = event.target.dataset.color;
		let style = event.target.style;
		style.borderRight = '3px solid' + color;
		bodyStyle.background = color;
	})
	elements.addEventListener('mouseleave',(event)=>{
		event.target.removeAttribute('style');
		document.body.removeAttribute('style');
	})
})

// 随机文字函数
function helloSpan(){
	let emjoiList = ["❤️涩涩❤️", "😢悲伤😢", "🖐️好冲🖐️", "😤傲慢😤", "🤠野性🤠"];
	let num = Math.floor((Math.random() * 5));
	document.getElementById('hello_span').innerText = emjoiList[num];
}