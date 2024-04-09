// ==UserScript==
// @author          GJK_en
// @name            BiliColorFix
// @namespace       Telegram@GJK_en
// @description	    修复部分暗黑插件颜色错误
// @version         0.0.1
// @include         *://www.bilibili.com/video/*
// @grant           GM_addStyle
// @run-at          document-start
// ==/UserScript==

(function(){
	'use strict'
	const website = [
	{
		name: 'bilibili',
		css: `
			.video-desc-container .basic-desc-info[data-v-1d530b8d], .video-info-container .video-info-title-inner .video-title[data-v-a17d480e]{color:#fff !important;}
            .reply-box .box-normal .reply-box-warp[data-v-a6daab22]{background-color:#222222 !important;}
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