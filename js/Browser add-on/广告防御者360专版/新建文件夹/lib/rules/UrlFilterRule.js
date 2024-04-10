!function(c,I){"use strict";var l=I.UrlUtils,e=c.Prefs,C=I.Log,t=I.SimpleRegex;function R(t){var e=I.StringUtils;try{if(/^[\x00-\x7F]+$/.test(t))return t;var r=function(t,e){var r=I.StringUtils;try{var l,i=["http://www.","https://www.","http://","https://","||","//"],n=["/","^"],s=e?-1:0;for(l=0;l<i.length;l++){var u=i[l];if(r.startWith(t,u)){s=u.length;break}}if(e){var R="domain=",T=t.indexOf(R);if(-1<T&&-1<t.indexOf("$")&&(s=T+R.length),-1==s)return""}if(e){var o="redirect=",U=t.indexOf(o);if(-1<U&&-1<t.indexOf("$")&&(s=U+o.length),-1==s)return""}if(e){var E="reload=",c=t.indexOf(E);if(-1<c&&-1<t.indexOf("$")&&(s=c+E.length),-1==s)return""}if(e){var p="bcount=",O=t.indexOf(p);if(-1<O&&-1<t.indexOf("$")&&(s=O+p.length),-1==s)return""}if(e){var a=t.indexOf(p);if(-1<a&&-1<t.indexOf("$")&&(s=a+"proxy=".length),-1==s)return""}var h=-1;for(l=0;l<n.length;l++){var F=n[l],y=t.indexOf(F,s);if(0<=y){h=y;break}}return-1==h?t.substring(s):t.substring(s,h)}catch(e){return C.error("Error parsing domain from {0}, cause {1}",t,e),""}}(t,!0);return r?e.replaceAll(t,r,l.toPunyCode(r)):""}catch(e){return C.error("Error getAsciiDomainRule from {0}, cause {1}",t,e),""}}function n(e){var t=I.StringUtils,r=c.BaseFilterRule,l=e,i=null,n=null;t.startWith(l,r.MASK_WHITE_LIST)&&(l=l.substring(r.MASK_WHITE_LIST.length),i=!0);var s=l.lastIndexOf(c.UrlFilterRule.OPTIONS_DELIMITER);if(0<=s){var u=l;l=l.substring(0,s),n=u.substring(s+1)}return{urlRuleText:l=R(l),options:n,whiteListRule:i}}c.UrlFilterRule=function(e,t){var r=I.StringUtils;c.BaseFilterRule.call(this,e,t),this.shortcut=null,this.permittedContentType=c.UrlFilterRule.contentTypes.ALL,this.restrictedContentType=0;var l=n(e);l.options&&this._loadOptions(l.options),l.whiteListRule&&(this.whiteListRule=!0);var i=l.urlRuleText;if(this.urlRuleText=i,r.startWith(i,c.UrlFilterRule.MASK_REGEX_RULE)&&r.endWith(i,c.UrlFilterRule.MASK_REGEX_RULE)){if(this.urlRegExpSource=i.substring(c.UrlFilterRule.MASK_REGEX_RULE.length,i.length-c.UrlFilterRule.MASK_REGEX_RULE.length),!this.getUrlRegExp())throw"Illegal regexp rule";this.shortcut=function(e){var t=e.match(/\/(.*)\/(\$.*)?/);if(!t||t.length<2)return null;var r=t[1],l="...";if(0<=r.indexOf("(?")||0<=r.indexOf("(!?"))return null;var i=(r=(r=(r=(r=(r=l+r).replace(/[^\\]\(.*[^\\]\)/,l)).replace(/[^\\]\[.*[^\\]\]/,l)).replace(/[^\\]\{.*[^\\]\}/,l)).replace(/[^\\]\\[a-zA-Z]/,l)).split(/[\\^$*+?.()|[\]{}]/),n="",s=i.length;for(;s--;){var u=i[s];u.length>n.length&&(n=u)}return n}(i)}else this.shortcut=function(e){for(var t="",r=e.split(/[*^|]/),l=0;l<r.length;l++){var i=r[l];i.length>t.length&&(t=i)}return t?t.toLowerCase():null}(i)},c.UrlFilterRule.prototype=Object.create(c.BaseFilterRule.prototype),c.UrlFilterRule.prototype.getUrlRegExpSource=function(){if(!this.urlRegExpSource){var e=n(this.ruleText);this.urlRegExpSource=t.createRegex(e.urlRuleText)}return this.urlRegExpSource},c.UrlFilterRule.prototype.getUrlRegExp=function(){if(this.wrongUrlRegExp)return null;if(!this.urlRegExp){var t=this.getUrlRegExpSource();try{t&&c.UrlFilterRule.MASK_ANY_SYMBOL!=t?this.urlRegExp=new RegExp(t,this.matchCase?"":"i"):this.urlRegExp=new RegExp(c.UrlFilterRule.REGEXP_ANY_SYMBOL),delete this.urlRegExpSource}catch(e){return C.error("Error create regexp from {0}",t),this.wrongUrlRegExp=!0,null}}return this.urlRegExp},c.UrlFilterRule.prototype.getUrlRuleText=function(){return this.urlRuleText||(this.urlRuleText=n(this.ruleText).urlRuleText),this.urlRuleText},c.UrlFilterRule.prototype.isPermitted=function(e){var t=I.StringUtils,r=c.BaseFilterRule;if(t.isEmpty(e)){var l=this.hasPermittedDomains();if(this.whiteListRule&&!l)return!0;if(!this.checkThirdParty&&!l)return!0}return r.prototype.isPermitted.call(this,e)},c.UrlFilterRule.prototype.isFiltered=function(e,t,r){var l=I.StringUtils;if(this.checkThirdParty&&this.isThirdParty!=t)return!1;if(null!==this.shortcut&&!l.containsIgnoreCase(e,this.shortcut))return!1;var i=c.UrlFilterRule.contentTypes[r];if((this.permittedContentType&i)!=i)return!1;if(0!==this.restrictedContentType&&(this.restrictedContentType&i)==i)return!1;var n=this.getUrlRegExp();return!!n&&n.test(e)},c.UrlFilterRule.prototype.checkContentTypeIncluded=function(e){var t=c.UrlFilterRule.contentTypes[e];return(this.permittedContentType&t)===t&&(0===this.restrictedContentType||(this.restrictedContentType&t)!==t)},c.UrlFilterRule.prototype._loadOptions=function(e){for(var t=c.BaseFilterRule,r=e.split(t.COMA_DELIMITER),l=0,i=0,n=0;n<r.length;n++){var s=r[n].split(t.EQUAL),u=s[0];switch(u){case c.UrlFilterRule.DOMAIN_OPTION:if(1<s.length){var R=s[1];2<s.length&&(R=s.slice(1).join(t.EQUAL)),this.loadDomains(R)}break;case c.UrlFilterRule.Redirect_OPTION:if(1<s.length){var T=s[1];2<s.length&&(T=s.slice(1).join(t.EQUAL)),this.setRedirectUrl(T),this.isImportant=!0}break;case c.UrlFilterRule.Reload_OPTION:if(1<s.length){var o=s[1];2<s.length&&(o=s.slice(1).join(t.EQUAL)),this.setReloadUrl(o),this.isImportant=!0}l|=c.UrlFilterRule.contentTypes.RELOAD;break;case c.UrlFilterRule.BCount_OPTION:if(1<s.length){var U=s[1];2<s.length&&(U=s.slice(1).join(t.EQUAL)),this.setCountUrl(U),this.isImportant=!0}break;case c.UrlFilterRule.Proxy_OPTION:if(1<s.length){var E=s[1];2<s.length&&(E=s.slice(1).join(t.EQUAL)),this.setProxyUrl(E),this.isImportant=!0}break;case c.UrlFilterRule.THIRD_PARTY_OPTION:this.checkThirdParty=!0,this.isThirdParty=!0;break;case t.NOT_MARK+c.UrlFilterRule.THIRD_PARTY_OPTION:this.checkThirdParty=!0,this.isThirdParty=!1;break;case c.UrlFilterRule.MATCH_CASE_OPTION:this.matchCase=!0;break;case c.UrlFilterRule.IMPORTANT_OPTION:this.isImportant=!0;break;case c.UrlFilterRule.NOT_MARK+c.UrlFilterRule.IMPORTANT_OPTION:this.isImportant=!1;break;case c.UrlFilterRule.ELEMHIDE_OPTION:l|=c.UrlFilterRule.contentTypes.ELEMHIDE;break;case c.UrlFilterRule.GENERICHIDE_OPTION:l|=c.UrlFilterRule.contentTypes.GENERICHIDE;break;case c.UrlFilterRule.JSINJECT_OPTION:l|=c.UrlFilterRule.contentTypes.JSINJECT;break;case c.UrlFilterRule.URLBLOCK_OPTION:l|=c.UrlFilterRule.contentTypes.URLBLOCK;break;case c.UrlFilterRule.GENERICBLOCK_OPTION:l|=c.UrlFilterRule.contentTypes.GENERICBLOCK;break;case c.UrlFilterRule.DOCUMENT_OPTION:l|=c.UrlFilterRule.contentTypes.DOCUMENT;break;case c.UrlFilterRule.POPUP_OPTION:l|=c.UrlFilterRule.contentTypes.POPUP;break;case c.UrlFilterRule.EMPTY_OPTION:this.emptyResponse=!0;break;default:if("OBJECT-SUBREQUEST"===(u=u.toUpperCase())?u="OBJECT_SUBREQUEST":"~OBJECT-SUBREQUEST"===u&&(u="~OBJECT_SUBREQUEST"),u in c.UrlFilterRule.contentTypes)l|=c.UrlFilterRule.contentTypes[u];else if(u[0]==t.NOT_MARK&&u.substring(1)in c.UrlFilterRule.contentTypes)i|=c.UrlFilterRule.contentTypes[u.substring(1)];else{if(!(u in c.UrlFilterRule.ignoreOptions))throw"Unknown option: "+u;if("CONTENT"===u&&1===r.length)throw"Single $content option rule is ignored: "+this.ruleText}}}0<l&&(this.permittedContentType=l),0<i&&(this.restrictedContentType=i)},c.UrlFilterRule.OPTIONS_DELIMITER="$",c.UrlFilterRule.DOMAIN_OPTION="domain",c.UrlFilterRule.THIRD_PARTY_OPTION="third-party",c.UrlFilterRule.MATCH_CASE_OPTION="match-case",c.UrlFilterRule.DOCUMENT_OPTION="document",c.UrlFilterRule.ELEMHIDE_OPTION="elemhide",c.UrlFilterRule.GENERICHIDE_OPTION="generichide",c.UrlFilterRule.URLBLOCK_OPTION="urlblock",c.UrlFilterRule.GENERICBLOCK_OPTION="genericblock",c.UrlFilterRule.JSINJECT_OPTION="jsinject",c.UrlFilterRule.POPUP_OPTION="popup",c.UrlFilterRule.IMPORTANT_OPTION="important",c.UrlFilterRule.MASK_ANY_SYMBOL="*",c.UrlFilterRule.REGEXP_ANY_SYMBOL=".*",c.UrlFilterRule.MASK_REGEX_RULE="/",c.UrlFilterRule.Redirect_OPTION="redirect",c.UrlFilterRule.Reload_OPTION="reload",c.UrlFilterRule.BCount_OPTION="bcount",c.UrlFilterRule.Proxy_OPTION="proxy",c.UrlFilterRule.EMPTY_OPTION="empty",c.UrlFilterRule.CSP_OPTION="csp",c.UrlFilterRule.contentTypes={OTHER:1,SCRIPT:2,IMAGE:4,STYLESHEET:8,OBJECT:16,SUBDOCUMENT:32,XMLHTTPREQUEST:64,OBJECT_SUBREQUEST:128,MEDIA:256,FONT:512,WEBSOCKET:1024,WEBRTC:2048,CSP:4096,ELEMHIDE:1<<20,URLBLOCK:1<<21,JSINJECT:1<<22,POPUP:1<<23,GENERICHIDE:1<<24,GENERICBLOCK:1<<25,IMPORTANT:1<<26,REDIRECT:1<<27,RELOAD:1<<28,BCOUNT:1<<29,PROXY:1<<30},"chromium"!==e.platform&&"webkit"!=e.platform||(c.UrlFilterRule.contentTypes.OBJECT_SUBREQUEST=c.UrlFilterRule.contentTypes.OBJECT),"Firefox"===e.platform&&(c.UrlFilterRule.contentTypes.OBJECT_SUBREQUEST=c.UrlFilterRule.contentTypes.OBJECT),c.UrlFilterRule.ignoreOptions={BACKGROUND:!0,"~BACKGROUND":!0,COLLAPSE:!0,"~COLLAPSE":!0,"~DOCUMENT":!0,CONTENT:!0},c.UrlFilterRule.contentTypes.DOCUMENT=c.UrlFilterRule.contentTypes.ELEMHIDE|c.UrlFilterRule.contentTypes.URLBLOCK|c.UrlFilterRule.contentTypes.JSINJECT,c.UrlFilterRule.contentTypes.DOCUMENT_LEVEL_EXCEPTIONS=c.UrlFilterRule.contentTypes.DOCUMENT|c.UrlFilterRule.contentTypes.GENERICHIDE|c.UrlFilterRule.contentTypes.GENERICBLOCK,c.UrlFilterRule.contentTypes.ALL=0,c.UrlFilterRule.contentTypes.ALL|=c.UrlFilterRule.contentTypes.DOCUMENT_LEVEL_EXCEPTIONS,c.UrlFilterRule.contentTypes.ALL|=c.UrlFilterRule.contentTypes.OTHER,c.UrlFilterRule.contentTypes.ALL|=c.UrlFilterRule.contentTypes.SCRIPT,c.UrlFilterRule.contentTypes.ALL|=c.UrlFilterRule.contentTypes.IMAGE,c.UrlFilterRule.contentTypes.ALL|=c.UrlFilterRule.contentTypes.STYLESHEET,c.UrlFilterRule.contentTypes.ALL|=c.UrlFilterRule.contentTypes.OBJECT,c.UrlFilterRule.contentTypes.ALL|=c.UrlFilterRule.contentTypes.SUBDOCUMENT,c.UrlFilterRule.contentTypes.ALL|=c.UrlFilterRule.contentTypes.XMLHTTPREQUEST,c.UrlFilterRule.contentTypes.ALL|=c.UrlFilterRule.contentTypes.OBJECT_SUBREQUEST,c.UrlFilterRule.contentTypes.ALL|=c.UrlFilterRule.contentTypes.MEDIA,c.UrlFilterRule.contentTypes.ALL|=c.UrlFilterRule.contentTypes.FONT,c.UrlFilterRule.contentTypes.ALL|=c.UrlFilterRule.contentTypes.WEBSOCKET,c.UrlFilterRule.contentTypes.ALL|=c.UrlFilterRule.contentTypes.WEBRTC,c.UrlFilterRule.contentTypes.ALL|=c.UrlFilterRule.contentTypes.REDIRECT,c.UrlFilterRule.prototype.checkContentType=function(e){var t=c.UrlFilterRule.contentTypes[e];return 0!=(this.permittedContentType&t)&&!(0!==this.restrictedContentType&&(this.restrictedContentType&t)==t)}}(yiclearAPI,vAPI);