// ==UserScript==
// @name			Nyaa Enhance
// @version			0.3
// @description		去广告 | 优化暗黑和白天模式列表的文字配色 | 所有域名在顶部添emjoi加开关按钮
// @author			Telegram@GJK_en
// @match			https://*.nyaa.si/*
// @icon			https://www.google.com/s2/favicons?sz=64&domain=nyaa.si
// @run-at			document-end
// @note			2024.04-07-V0.0.3 更新屏蔽的ad | 重构代码为jQuery | DarkMode文字替换成emjoi
// @license			MIT
// @downloadURL https://update.greasyfork.org/scripts/451973/Nyaa%20Enhance.user.js
// @updateURL https://update.greasyfork.org/scripts/451973/Nyaa%20Enhance.user.js
// ==/UserScript==

function ChangeColor(x){
	//修改文字颜色函数
	$tdA = $("td:nth-child(2) > a")
	if (x == 1){$tdA.css("color","#bcbcbc")}
	else{$tdA.css("color","#000")}
}

(function(){
	//页面开始判断是否为dark模式
	if($('body').hasClass("dark")){
		ChangeColor(1)
		$(".nav")[0].insertAdjacentHTML('beforeend','<li id="themeToggle2"><a href="#" return false;>🌙</a></li>')
	}
	else{
		ChangeColor(2)
		$(".nav")[0].insertAdjacentHTML('beforeend','<li id="themeToggle2"><a href="#" return false;>🔆</a></li>')
	}

	//获取ul 并添加li标签和点击事件
	$Toogle = $("#themeToggle2")
	$Toogle.children().css("font-size","18px")
	$Toogle.click(function(){
		if($('body').hasClass("dark")){
			ChangeColor(2)
			$Toogle.children().text("🔆")
			toggleDarkMode()
		}
		else{
			ChangeColor(1)
			$Toogle.children().text("🌙")
			toggleDarkMode()
		}
	})

	//sukebei 横幅广告
	$("#e71bf691-4eb4-453f-8f11-6f40280c18f6").css("display","none")
	//sukebei 右下角延时广告
	if($(".exo_wrapper")){
		setTimeout(function(){
			$(".exo_wrapper").css("display","none")
		},1300)
	}else{$(".exo_wrapper").css("display","none")}
})()

//自动翻页
let lock = false
window.addEventListener('scroll', async function (){
	if(lock){
	  return
	}
	if(window.pageYOffset + window.innerHeight >= window.document.querySelector('.table-responsive').scrollHeight){
		lock = true
		let next_page = $('ul.pagination li:last-child a').attr('href')
			if(!next_page){
			return
		}
		next_page = window.location.origin + next_page
		let res = await fetch(next_page)
		res = await res.text()
		let data_list = res.match(/<tbody>\n((.*\n)+)\s+<\/tbody>/)
		$('.table-responsive tbody').append(data_list[1])
		let pagination = res.match(/(<ul class="pagination">.*<\/ul>)/s)
		$('.pagination').replaceWith(pagination[1])
		lock = false
	}
});