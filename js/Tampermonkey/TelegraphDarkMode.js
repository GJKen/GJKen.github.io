// ==UserScript==
// @name            TelegraphDarkMode
// @namespace       Telegram@GJK_en
// @author          GJK_en
// @icon
// @description	    暗黑模式
// @version         0.0.1
// @include         https://*telegra.ph/*
// @grant           GM_addStyle
// @run-at          document-start
// ==/UserScript==

(function(){
	'use strict'
	const website = [
	{
		name: 'telegra',
		css: `
			body{background: #1a202c !important;color: white !important;}
			address{color: #e2d06a !important;}
			.tl_article h1, .tl_article h2, .account{color: #e2e2e2;}
			.tl_article .tl_article_content, .tl_article .tl_article_content .ql-editor *{color: white;font-family:Arial,Microsoft YaHei,sans-serif;}
			.tl_article .tl_article_content blockquote{border-left: 3px solid #ff8a04;}
			.tl_article a[href]{border-bottom: .1em solid #58a6ae;}
			.tl_article .tl_article_content code, .tl_article .tl_article_content pre{background: #1d4986;}
            .tl_article.tl_article_edit [data-placeholder].empty:before, .tl_article.tl_article_edit.title_focused [data-label]:after{color:#b3b3b3;}
            .tl_article.tl_article_edit address a[href]{border-bottom: 0.1em solid rgba(35 133 81);}
            .tl_article.tl_article_edit figcaption[data-placeholder].empty:afterP{color: rgb(255 158 0 / 56%);}
            .tl_article .tl_article_content figcaption, .tl_article .tl_article_content figcaption .editable_input{padding: 5px 0 5px; vertical-align: super; background-color: #28354e; border-radius: 97px; color: #96a8aa !important;}
		`}]

	let url = window.location.href
	for(let i = 0; i < website.length; i++){
		if(url.indexOf(website[i].name) !== -1){
			return GM_addStyle(website[i].css)
		}
	};
})()