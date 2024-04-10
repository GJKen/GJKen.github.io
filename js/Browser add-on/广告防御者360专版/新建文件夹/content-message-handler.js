!function(a,n){n.ContentMessageHandler=function(){this.handleMessage=this.handleMessage.bind(this)},n.ContentMessageHandler.prototype={eventListeners:Object.create(null),sendMessageToSender:null,init:function(e,t,s,i,r,a){this.webRequestService=e,this.framesMap=s,this.filteringLog=i,this.BlockService=t,this.yiclearApplication=r,this.UI=a},setSendMessageToSender:function(e){this.sendMessageToSender=e},handleMessage:function(e,t,s){switch(e.type){case"getSelectorsAndScripts":return this.webRequestService.processGetSelectorsAndScripts(t.tab,e.documentUrl,e.options)||{};case"initializeFiltersOnInstall":return this.BlockService.initializeFiltersOnInstall(function(e){s({enabledFilterIds:e})}),!0;case"openOptions":this.UI.openOptions();break;case"processShouldCollapse":return a.Prefs.collapseByContentScript?{collapse:this.webRequestService.processShouldCollapse(t.tab,e.elementUrl,e.documentUrl,e.requestType),requestId:e.requestId}:{collapse:!1,requestId:e.requestId};case"processShouldCollapseMany":return{requests:this.webRequestService.processShouldCollapseMany(t.tab,e.documentUrl,e.requests)};case"getWhiteListDomains":return{rules:this.BlockService.getWhiteListDomains(e.offset,e.limit,e.text)};case"clearWhiteListFilter":this.BlockService.clearWhiteListFilter();break;case"addWhiteListDomain":this.BlockService.addWhiteListDomain(e.text);break;case"addWhiteListDomains":this.BlockService.addWhiteListDomains(e.domains);break;case"removeWhiteListDomain":this.BlockService.removeWhiteListDomain(e.text);break;case"initializeFrameScript":return this._processInitializeFrameScriptRequest();case"addEventListener":return this._processAddEventListener(e,t);case"removeListener":var i=e.listenerId;n.EventNotifier.removeListener(i),delete this.eventListeners[i];break;case"openExportRulesTab":this.UI.openExportRulesTab(e.filename);break;case"updatefilterUrl":this.BlockService._updateFilterUrl(e.filterId,function(e){s({info:e})});break;case"getfiltersmetadata":return{metadata:this.BlockService.getFiltersMetadata()};case"addfilterUrl":this.BlockService._getUserFilterRule(e.url);break;case"addfilterUrl1":return this.BlockService._getUserFilterRule(e.url,function(e){s(e)}),!0;case"modifyfilter":this.BlockService.modifyfiltertitle(e.filterId,e.name);break;case"resetBlockedAdsCount":this.framesMap.resetBlockedAdsCount();break;case"addAndEnableFilter":this.BlockService.addAndEnableFilter(e.filterId);break;case"disableBlockFilter":this.BlockService.disableAntiBannerFilter(e.filterId);break;case"removeBlockFilter":this.BlockService.removeAntiBannerFilter(e.filterId);break;case"enableBlockFilter":this.BlockService.enableAntiBannerFilter(e.filterId);break;case"addUserRule":this.BlockService.addUserFilterRule(e.ruleText);break;case"clearUserFilter":this.BlockService.clearUserFilter();break;case"addUserFilterRule":this.BlockService.addUserFilterRule(e.text);break;case"addUserFilterRules":this.BlockService.addUserFilterRules(e.rules);break;case"getUserFilters":return{rules:this.BlockService.getUserFilters(e.offset,e.limit,e.text)};case"removeUserFilter":this.BlockService.removeUserFilter(e.text);break;case"isFilterEnabled":return{isEnabled:this.BlockService.isAntiBannerFilterEnabled(e.filterId)};case"getBlockedCount":return{BlockedCount:this.framesMap.getBlockedCount()};case"getTabFrameInfoById":return{frameInfo:this.filteringLog.getTabFrameInfoById(e.tabId)};case"getTabInfoById":var r=this.filteringLog.getTabInfoById(e.tabId);return{tabInfo:this.filteringLog.serializeTabInfo(r)};case"getSpread":return{spreadData:a.spread};case"onCloseFilteringLogPage":this.filteringLog.onCloseFilteringLogPage();break;case"onOpenFilteringLogPage":this.filteringLog.onOpenFilteringLogPage();break;case"synchronizeOpenTabs":return this.filteringLog.synchronizeOpenTabs(function(e){s({tabs:e})}),!0;case"reloadTabById":this.filteringLog.reloadTabById(e.tabId);break;case"clearEventsByTabId":this.filteringLog.clearEventsByTabId(e.tabId);break;case"openTab":this.UI.openTab(e.url,e.options);break;case"loadAssistant":return this._processLoadAssistant();case"changeUserSetting":a.userSettings.setProperty(e.key,e.value);break;case"openissue":this.UI.openIssue();break;case"openfeedback":this.UI.openFeedback();break;case"getConfigs":return{rules:a.userSettings.getConfigs()};case"setConfigs":a.userSettings.setConfigs(e.configs);break;case"checkPageScriptWrapperRequest":return{block:this.webRequestService.checkPageScriptWrapperRequest(t.tab,e.elementUrl,e.documentUrl,e.requestType),requestId:e.requestId};default:throw"Unknown message: "+e}},_processLoadAssistant:function(){var e=this.UI.getAssistantCssOptions();return e.localization=this._getLocalization(["assistant_select_element","assistant_select_element_ext","assistant_select_element_cancel","assistant_block_element","assistant_block_element_explain","assistant_slider_explain","assistant_slider_min","assistant_slider_max","assistant_extended_settings","assistant_apply_rule_to_all_sites","assistant_block_by_reference","assistant_block_similar","assistant_block_class","assistant_block","assistant_another_element","assistant_preview","assistant_preview_header","assistant_preview_header_info","assistant_preview_end","assistant_preview_start"]),e},_getLocalization:function(e){var t={};for(var s in e)if(e.hasOwnProperty(s)){var i=e[s];t[i]=i18n.getMessage(i)}return t},_processInitializeFrameScriptRequest:function(){for(var e=Object.create(null),t=this.BlockService.getFiltersMetadata(),s=0;s<t.length;s++){var i=t[s].filterId;if(i)this.BlockService.isAntiBannerFilterEnabled(i)&&(e[i]=!0)}return{userSettings:a.userSettings.getAllSettings(),enabledFilters:e,filtersMetadata:this.BlockService.getFiltersMetadata(),requestFilterInfo:this.BlockService.getRequestFilterInfo(),contentBlockerInfo:this.BlockService.getContentBlockerInfo(),BlockedCount:this.framesMap.getBlockedCount(),environmentOptions:{isMacOs:n.platformUtils.isMacOs(),isSafariBrowser:n.platformUtils.isSafariBrowser(),isContentBlockerEnabled:n.platformUtils.isContentBlockerEnabled(),Prefs:{locale:a.Prefs.locale,mobile:a.Prefs.mobile,version:a.Prefs.version}},constants:{AntiBannerFiltersId:n.AntiBannerFiltersId,EventNotifierTypes:n.EventNotifierTypes,LogEvents:n.LogEvents}}},_processAddEventListener:function(e,t){var s=this,i=n.EventNotifier.addSpecifiedListener(e.events,function(){var e=s.eventListeners[i];e&&s.sendMessageToSender(e,{type:"notifyListeners",args:Array.prototype.slice.call(arguments)})});return this.eventListeners[i]=t,{listenerId:i}}}}(yiclearAPI,vAPI);