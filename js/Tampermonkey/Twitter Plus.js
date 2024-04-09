// ==UserScript==
// @name			Twitter Plus
// @version			0.0.1
// @description		让Twitter浏览体验增强, 1.去除敏感内容遮挡的模糊 2.增加:大屏看图点击图片则关闭,滚轮上下切图
// @namespace		Telegram@GJK_en
// @include			https://twitter.com/*
// @include			https://mobile.twitter.com/*
// @grant			GM_addStyle
// @grant			GM_getValue
// @grant			GM_setValue
// @grant			GM_registerMenuCommand
// @run-at			document-end
// @note			2024.04-06-V0.0.1 插件诞生了 
// ==/UserScript==

(() => {
	'use strict';

	// 滑动切换图片
	let enableDragToSwitch = GM_getValue('enableDragToSwitch', false);
	GM_registerMenuCommand('Drag to swtich images', () => {
	enableDragToSwitch = confirm(`Do you want to enable drag to swtich images?
	Current: ${enableDragToSwitch ? 'Enabled' : 'Disabled'}

	Please refresh to take effect after modification.`);
	GM_setValue('enableDragToSwitch', enableDragToSwitch);
	});

	if (enableDragToSwitch) GM_addStyle('img{-webkit-user-drag:none}');

	const labels = {};
	try {
	const kv = {
		af8fa2ad: 'close',
		af8fa2ae: 'close',
		c4d53ba2: 'prev',
		d70740d9: 'next',
		d70740da: 'next',
	};
	const i18nModule = webpackChunk_twitter_responsive_web.find(([[name]]) =>
		name.startsWith('i18n')
	);
	Object.values(i18nModule[1]).forEach(fn => {
		if (fn.length < 3) return;
		try {
		fn(undefined, undefined, () => ({
			_register: () => (k, v) => {
			if (k in kv) labels[kv[k]] = v;
			},
		}));
		} catch (e) {}
	});
	} catch (error) {
	console.error(error);
	}

	const getBtnByLabel = label =>
	document.querySelector(`div[aria-labelledby="modal-header"] div[aria-label="${label}"]`);
	const clickBtn = name => {
	const $btn = getBtnByLabel(labels[name]);
	if ($btn) {
		$btn.click();
		return true;
	}
	return false;
	};

	const closeImgView = () => clickBtn('close');
	const prevImg = () => clickBtn('prev');
	const nextImg = () => clickBtn('next');

	window.addEventListener('wheel', ({ deltaY, target: { tagName, baseURI } }) => {
	if (tagName == 'IMG' && /\/photo\//.test(baseURI)) {
		if (deltaY < 0) prevImg();
		else if (deltaY > 0) nextImg();
	}
	});

	if (enableDragToSwitch) {
	let x = 0;
	let y = 0;
	window.addEventListener('mousedown', ({ clientX, clientY }) => {
		x = clientX;
		y = clientY;
	});
	window.addEventListener(
		'mouseup',
		({ button, clientX, clientY, target: { tagName, baseURI } }) => {
		if (button !== 0 || !(tagName == 'IMG' && /\/photo\//.test(baseURI))) return;
		const [sx, sy] = [clientX - x, clientY - y].map(Math.abs);
		const mx = clientX - x;
		if (sx <= 10 && sy <= 10) closeImgView();
		if (sy <= sx) {
			if (mx > 0) prevImg();
			else if (mx < 0) nextImg();
		}
		}
	);
	} else {
	document.addEventListener(
		'click',
		e => {
		const {
			target: { tagName, baseURI },
		} = e;
		if (!(tagName == 'IMG' && /\/photo\//.test(baseURI))) return;
		closeImgView();
		e.stopPropagation();
		},
		{ capture: true }
	);
	}

	//删除模糊+样式优化
	const website = [
	{
	name: 'twitter',
	css: `
		.r-yfv4eo{filter: none !important;}
		.css-175oi2r.r-1awozwy.r-1p0dtai.r-zchlnj.r-1cmwbt1.r-1777fci.r-edyy15.r-u8s1d.r-1d2f490.r-ipm5af{display: none !important;}
		.r-jwli3a{color: rgb(26 137 212) !important;}
	`}]

	let url = window.location.href
	for(let i = 0; i < website.length; i++){
		if(url.indexOf(website[i].name) !== -1){
			return GM_addStyle(website[i].css)
		}
	};
})();