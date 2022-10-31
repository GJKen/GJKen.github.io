// ==UserScript==
// @author          GJK_en
// @name            PixivDarkMode
// @namespace       Telegram@GJK_en
// @icon            http://www.pixiv.net/favicon.ico
// @description	    Pixiv Dark模式
// @version         0.0.1
// @include         *://www.pixiv.net/*
// @grant           GM_addStyle
// @run-at          document-start
// ==/UserScript==

(function(){
	'use strict'
	const website = [
	{
		name: 'pixiv',
		css: `
			.eHTuWt div{color: #ffb100;}
			.fpvahN div{color: #ff757b;}
			.iGEWnf span{color: #85c687;}
			.jRsJMY a{background: #4e4e4e;}
			.yXXDf{opacity: .5 !important;}
			.gHgzdu{color: #c6c6c6 !important;}
			.dmNKsz{color: #ff0000 !important;}
			.dKlqcj span:hover{color: #858585;}
			.iWBYKe a{color: #d7be77 !important;}
			h3.biIkuP{color: #82d0fe !important;}
			.yXXDf:hover{opacity: .9 !important;}
			.efGgAX span, .efGgAX svg{color: red;}
			.ekruOH li:hover{background: #005892;}
			._2AOtfl9 svg{fill: #0096fa !important;}
			.list-items, .eHTuWt{background: #1a202c;}
			span.fqQOcp, .dKlqcj span{color: #74c972;}
			.dmRrjk button:hover{background: #dcdcdc !important;}
			.dmRrjk button, ._3LhShlo._2sMeHzD{background: #ffe4c4;}
			.ZqjkC, ._unit{box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);}
			li.bookmark-item{border-top: 1px solid #724f00 !important;}
			.vkWNg::-webkit-scrollbar-thumb{background: #666666 !imporant;border-radius: 25px;}
			.doGwzZ.doGwzZ{color: #fff !important; box-shadow: rgba(255, 255, 255, .3)0px 0px 0px 3px;}
			.iznnKG{border-bottom: 2px solid; border-image: linear-gradient(90deg,#548aa4, rgba(51,51,51, .5) ) 10;}
			.gHgzdu::after, .kKSfNb::before{background: linear-gradient(90deg, rgba(51, 51, 51, .2), rgba(51, 51, 51)) !important;}
			.jqVAOj, .ekruOH, .dquAnL, .hKigOB button, .bjEbrm>button, .bivCpt{background: #0096fa !important;color: #fff !important;}
			.fsIKdV{background: none !important;}
			body, .ZqjkC, .gTFqQV, .gMEAWM, .dIGjtZ, .biNiqG, ._unit, .jMEnyM, .iClkCH, .fXIpvq, .cxXhWC{background: #333333 !important;}
			body, h1, h2, a, .kIRbpf, .kMwKuh div, .hLjavI p, .uWoxF, .kfknnl p, .kfknnl a, .MGIMG, .AycWDdc, .fsIKdV:hover{color: #e2e2e2 !important;}
			.cpYNLV a, .keRgel, .iTGEUq{color: #e48c41 !important;}
			.dqLunY a, .jTkWOR a, .hFETTl>a, ._3LhShlo._2sMeHzD, .kyTPMN, .cQSPQT{color: #000 !important;}
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