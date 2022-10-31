// ==UserScript==
// @name         Nyaa Enhance
// @namespace    Nyaa Enhance by:GJK
// @version      0.2
// @description  优化Nyaa的暗黑主题 | 修改nyaa暗黑模式下,主页显示列表字体颜色 | 所有Nyaa域名在顶部添加darkmode按钮
// @author       Telegram@GJK_en
// @match        https://*.nyaa.si/*
// @icon         https://i.altapps.net/icons/nyaa-v2-ec0e0.png
// @grant        none
// @license      MIT
// ==/UserScript==

(function(){
	// 提前设置需要添加的标签
	var liTag = document.createElement('li');
	var liTagA = document.createElement('a');
	// UL list | UL列表
	var UlList = document.querySelector("ul:nth-child(1)");
	// 获取有多少个UL标签
	var UlCount = UlList.children.length;
	var body = document.body.classList;
	// 添加按钮
	UlList.appendChild(liTag);
	UlList.children[UlCount].appendChild(liTagA);
	liTagA.href = '#';
	liTagA.innerText = 'DarkMode';
	// 判断是否为nyaa主页
	if(document.querySelector("table > tbody")==null){
		UlList.children[UlCount].addEventListener('click', function(){
			if(body.contains('dark')){
				body.remove('dark')
				toggleDarkMode()
			}else{
				body.add('dark')
				toggleDarkMode()
			}
		});
	}else{
		// 获取tbody | 文件列表
		var tbodyChild = document.querySelector("table > tbody").children;
		// 判断body是否有'darkMode'class类, 默认dark模式下修改颜色
		if(body.contains('dark')){ChangeColor()}
		UlList.children[UlCount].addEventListener('click', function(){
			// 给按钮添加监听事件 | 判断body是否有'darkMode'class类
			if(body.contains('dark')){
				body.remove('dark')
				toggleDarkMode()
				// 恢复文字颜色函数
				for(let i = 0; i < tbodyChild.length; i++){
					var x = tbodyChild[i].children[1].children;
					if(x[1]===undefined){
						// 无 comment 的情况
						x[0].removeAttribute('style');
					}else{
						x[1].removeAttribute('style');
					}
				}
			}else{
				body.add('dark')
				toggleDarkMode()
				ChangeColor()
			}
		});
		function ChangeColor(){
			// 修改文字颜色函数
			for(let i = 0; i < tbodyChild.length; i++){
				let x = tbodyChild[i].children[1].children;
				if(x[1]===undefined){
					// 无 comment 的情况
					x[0].style.color='#cbcbcb';
				}else{
					x[1].style.color='#cbcbcb';
				}
			}
		};
	}
})();