// ==UserScript==
// @name			多个图站去广告
// @version			0.1
// @description		Kemono | gelbooru | Pixiv
// @author			Telegram@GJK_en
// @match			https://*.kemono.su/*
// @match			https://gelbooru.com/*
// @match			https://*.Pixiv.net/*
// @run-at			document-end
// @note				2024.04-09-V0.0.3 脚本诞生了!
// @license			MIT
// @require			https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// ==/UserScript==

// 获取当前网站的URL
$currentUrl = document.URL;
window.onload = function(){
	if ($currentUrl.includes('gelbooru.com')){
		$('.headerAd, .footerAd, .footerAd2').remove()
		if ($(".mainBodyPadding > center").children().is('script')){
			$(".mainBodyPadding > center").remove()
		}
		$("#resize-link").prev().remove()
	} else if ($currentUrl.includes('pixiv.net')){
		$("section:nth-child(4), .sc-12rgki1-0.jMEnyM > :nth-child(5), .sc-171jvz-0.sc-zfvkpm-0.gcrJTU.jqMLBd, section:nth-child(4), .sc-12n125f-0.lxYKE, .sc-12xjnzy-1.expahI").remove()
		setTimeout(function(){
			$(".sc-12rgki1-0.jMEnyM > div:nth-child(4)").remove()
		},800)
		let $ad2 = $(".sc-1yvhotl-1.gpoeGt")
		if ($ad2 != null){
			$(".sc-1yvhotl-1.gpoeGt").remove()
		}
	} else if ($currentUrl.includes('kemono.su')){
		$(".ad-container, .ad-container, #player-container").remove()
	}
}