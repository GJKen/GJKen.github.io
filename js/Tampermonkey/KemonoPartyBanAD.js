// ==UserScript==
// @author          GJK_en
// @name            KemonoPartyBanAD
// @namespace       Telegram@GJK_en
// @icon            blob:chrome-extension://dbjbempljhcmhlfpfacalomonjpalpko/28277b0d-56e2-489f-8416-283393e48433
// @description	    KemonoParty去广告
// @version         0.0.1
// @include         *://kemono.party/*
// @grant           GM_addStyle
// @run-at          document-start
// ==/UserScript==

(function(){
	'use strict'
	const website = [
	{
		name: 'kemono',
		css: `
			.ad-container, .root--3BHg4{display: none;}
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