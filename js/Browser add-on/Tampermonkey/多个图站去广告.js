// ==UserScript==
// @name			多个图站去广告+优化
// @version			0.1
// @description		Kemono | gelbooru | Pixiv
// @author			Telegram@GJK_en
// @match			https://*.kemono.su/*
// @match			https://gelbooru.com/*
// @match			https://www.Pixiv.net/*
// @match			https://x.com/*
// @match			https://twitter.com/*
// @run-at			document-end
// @note			2024.04-09-V0.0.3 脚本诞生了!
// @grant			GM_addStyle
// @grant			GM_getResourceText
// @license			MIT
// @require			https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// ==/UserScript==

// 获取当前网站的URL
$currentUrl = document.URL;
window.onload = function(){
	if ($currentUrl.includes('gelbooru.com')){//gelbooru AD
		$('.headerAd, .footerAd, .footerAd2').remove()
		if ($(".mainBodyPadding > center").children().is('script')){
			$(".mainBodyPadding > center").remove()
		}
		$("#resize-link").prev().remove()
	} else if ($currentUrl.includes('pixiv.net')){
		$("#js-mount-point-header").removeClass("with-ad")
		$(".ad-footer, #header-banner, .section:nth-child(4), .sc-12rgki1-0.jMEnyM > :nth-child(5), .sc-171jvz-0.sc-zfvkpm-0.gcrJTU.jqMLBd, section:nth-child(4), .sc-12n125f-0.lxYKE, .sc-12xjnzy-1.expahI, .sc-b1ad7ffe-0.kxfnYg, .sc-1i13osm-0.bWUARQ, .sc-171jvz-0.sc-1pb5vpb-1.gcrJTU.hEDZzC, .sc-172opbg-0.sc-13y2a1u-0.fcTqgf.jeUGOF, .sc-3mzzpc-0.NzNc, .sc-8253bb09-2,kTdbhE, .sc-b1ad7ffe-0.kxfnYg, .sc-1t7vxzj-7.bDFEga").remove()
		//延迟广告
		setTimeout(function(){
			$(".sc-12rgki1-0.jMEnyM > div:nth-child(4)").remove()
			let $ad = document.querySelectorAll("iframe") //Pixiv常见的横幅广告
			$ad[$ad.length - 1].css("display", "none")
		},900)
		let $ad = $(".sc-1yvhotl-1.gpoeGt")
		if ($ad != null){
			$(".sc-1yvhotl-1.gpoeGt").remove()
		}
	} else if ($currentUrl.includes('kemono.su')){//kemono AD
		$(".ad-container, .ad-container, #player-container").remove()
	} else if ($currentUrl.includes('x.com')){ //优化Twitter多图片文章的右下角图标颜色
		const website = [{
			css: `.r-jwli3a {color: #4372fd !important;}`
		}];
		website.forEach((site) => { // 遍历website数组并添加每个样式
			return GM_addStyle(site.css);
		});
	}
}