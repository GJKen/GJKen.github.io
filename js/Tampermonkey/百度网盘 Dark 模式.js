// ==UserScript==
// @author          GJK_en
// @name            百度网盘 Dark 模式
// @namespace       Telegram@GJK_en
// @icon            https://bkimg.cdn.bcebos.com/pic/0dd7912397dda144661fca53bcb7d0a20cf48639?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5
// @description	    Dark模式|移除广告
// @version         0.0.1
// @include         *://pan.baidu.com/*
// @grant           GM_addStyle
// @run-at          document-start
// @supportURL      https://gist.github.com/Hunlongyu/fbd80bac47b8a2aba216fe5c3399b464
// ==/UserScript==

(function(){
	'use strict'
	const website = [
	{
		name: 'baidu',
		css: `
			body, .wp-s-aside-nav__main, .nd-netdisktool-main{background: #1a202c !important;}
			.wp-s-aside-nav__main-top, .wp-s-aside-nav__file-list-cate.is-active{color: #fff;background: #1a202c !important;}
			.wp-s-aside-nav__sub-item{color: red}
			.wp-s-aside-nav__main-top:hover, .wp-s-aside-nav__sub-item:hover{background: #455c80 !important;}
			a#web-header-text-s-28, .wp-s-header-user__drop-info, .wp-s-header-user__drop-body, span.wp-s-header__right-item, a.wp-s-header__right-item{display: none;}
			.wp-s-agile-tool-bar__h-action-button{color: #000;}
			.wp-s-toolitem-main{background: #e3cc5b;}
			 .nd-netdisktool-main__body div{color: #fff !important;}
			.wp-s-pan-table__header-th span{color: #e3cc5b !important;}
			.wp-s-pan-list__time-column .column-content-hide{color: #9761d1;}
			.wp-s-pan-table__body-row:hover, .wp-s-pan-table__body-row.selected{background: #455c80;}
			.table.wp-s-pan-table__body-table.mouse-choose-box p, .wp-s-aside-nav__main-item{color: #f9f9f9;}
			.wp-s-agile-tool-bar__h-action-button:hover, .wp-s-agile-tool-bar__h-action-button i{color: #0bd6a7;}
			.wp-s-agile-tool-bar__h-action-button a, a.list-name-text{color: #fff;}
			.wp-s-pan-file-main__nav-item-title text-ellip, .wp-s-header__left-item .iconfont, .wp-s-header__right-item .iconfont, .wp-s-header-user__body p{color: #93ffff !important;}
		`
	}
	]

	let url = window.location.href
	for(let i = 0; i < website.length; i++){
		if(url.indexOf(website[i].name) !== -1){
			return GM_addStyle(website[i].css)
		}
	};
})()