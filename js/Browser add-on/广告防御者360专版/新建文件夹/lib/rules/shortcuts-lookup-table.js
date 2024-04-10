!function(n,t){"use strict";var r=t.ArrayUtils,i=t.CollectionUtils,e=t.StringUtils;n.ShortcutsLookupTable=function(t){if(this.lookupTable=Object.create(null),t)for(var e=0;e<t.length;e++)this.addRule(t[e])},n.ShortcutsLookupTable.prototype={addRule:function(t){var e=this._getRuleShortcut(t);if(!e||"http:/"==e||"https:"==e)return!1;if(e in this.lookupTable){var o=this.lookupTable[e];r.isArray(o)?o.push(t):this.lookupTable[e]=[o,t]}else this.lookupTable[e]=t;return!0},removeRule:function(t){var e=this._getRuleShortcut(t);if(e&&e in this.lookupTable){var o=this.lookupTable[e];r.isArray(o)?(i.removeRule(o,t),0==o.length&&delete this.lookupTable[e]):delete this.lookupTable[e]}},clearRules:function(){this.lookupTable=Object.create(null)},lookupRules:function(t){for(var e=[],o=0;o<=t.length-n.ShortcutsLookupTable.SHORTCUT_LENGTH;o++){var l=t.substring(o,o+n.ShortcutsLookupTable.SHORTCUT_LENGTH),u=this.lookupTable[l];u&&(r.isArray(u)?e=e.concat(u):e.push(u))}return e},getRules:function(){var t=[];for(var e in this.lookupTable){var o=this.lookupTable[e];o&&(r.isArray(o)?t=t.concat(o):t.push(o))}return t},_getRuleShortcut:function(t){return e.isEmpty(t.shortcut)||t.shortcut.length<n.ShortcutsLookupTable.SHORTCUT_LENGTH?null:t.shortcut.substring(t.shortcut.length-n.ShortcutsLookupTable.SHORTCUT_LENGTH)}},n.ShortcutsLookupTable.SHORTCUT_LENGTH=6,n.DomainsLookupTable=function(t){if(this.lookupTable=Object.create(null),t)for(var e=0;e<t.length;e++)this.addRule(t[e])},n.DomainsLookupTable.prototype={addRule:function(t){var e=t.getPermittedDomains();if(!e||0===e.length)return!1;for(var o=0;o<e.length;o++){var l=e[o],u=this.lookupTable[l];u||(u=[],this.lookupTable[l]=u),u.push(t)}return!0},removeRule:function(t){var e=t.getPermittedDomains();if(e&&0!==e.length)for(var o=0;o<e.length;o++){var l=e[o],u=this.lookupTable[l];u&&(i.removeRule(u,t),0===u.length&&delete this.lookupTable[l])}},clearRules:function(){this.lookupTable=Object.create(null)},lookupRules:function(t){if(!t)return null;var e=t.split(".");if(0===e.length)return null;for(var o=null,l=e[e.length-1],u=e.length-2;0<=u;u--){l=e[u]+"."+l;var r=this.lookupTable[l];r&&0<r.length&&(null===o&&(o=[]),o=o.concat(r))}return o},getRules:function(){var t=[];for(var e in this.lookupTable){var o=this.lookupTable[e];o&&(i.isArray(o)?t=t.concat(o):t.push(o))}return t}},n.UrlFilterRuleLookupTable=function(){this.shortcutsLookupTable=new n.ShortcutsLookupTable,this.domainsLookupTable=new n.DomainsLookupTable,this.rulesWithoutShortcuts=[]},n.UrlFilterRuleLookupTable.prototype={addRule:function(t){this.shortcutsLookupTable.addRule(t)||this.domainsLookupTable.addRule(t)||this.rulesWithoutShortcuts.push(t)},removeRule:function(t){this.shortcutsLookupTable.removeRule(t),this.domainsLookupTable.removeRule(t),i.removeRule(this.rulesWithoutShortcuts,t)},clearRules:function(){this.shortcutsLookupTable.clearRules(),this.domainsLookupTable.clearRules(),this.rulesWithoutShortcuts=[]},getRules:function(){var t=[];return t=(t=(t=t.concat(this.rulesWithoutShortcuts)).concat(this.shortcutsLookupTable.getRules())).concat(this.domainsLookupTable.getRules())},_isFiltered:function(t,e,o,l,u,r){return t.isPermitted(e)&&(l||!t.isGeneric())&&t.isFiltered(o,u,r)},_findRule:function(t,e,o,l,u,r){var i,s;if(n.UrlFilterRule.contentTypes[u]===n.UrlFilterRule.contentTypes.DOCUMENT)for(s=0;s<o.length;s++)if(i=o[s],0<(n.UrlFilterRule.contentTypes.DOCUMENT_LEVEL_EXCEPTIONS&i.permittedContentType)&&this._isFiltered(i,e,t,r,l,"DOCUMENT_LEVEL_EXCEPTIONS"))return i;for(s=0;s<o.length;s++)if(i=o[s],this._isFiltered(i,e,t,r,l,u))return i;return null},findRule:function(t,e,o,l,u){if(!t)return null;var r,i=t.toLowerCase(),s=this.shortcutsLookupTable.lookupRules(i);return s&&0<s.length&&(r=this._findRule(t,e,s,o,l,u))?r:(s=this.domainsLookupTable.lookupRules(e))&&0<s.length&&(r=this._findRule(t,e,s,o,l,u))?r:0<this.rulesWithoutShortcuts.length&&(r=this._findRule(t,e,this.rulesWithoutShortcuts,o,l,u))?r:null}}}(yiclearAPI,vAPI);