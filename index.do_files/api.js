define(function() {
    return {
    	//现场登记
    	getxcjcTjInfo: WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/xcjc/getxcjcTjInfo.do',
    	getXcjcCxryInfo: WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/xcjc/getXcjcCxryInfo.do',
    	getWcsqxx: WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/xcjc/getWcsqxx.do',
    	getryxxInfo: WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/xcjc/getryxxInfo.do',
    	getjcryInfo: WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/xcjc/getjcryInfo.do',
    	getxcdjInfo: WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/xcjc/getxcdjInfo.do',
    	saveXcdjInfo: WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/xcjc/saveXcdjInfo.do',
    	getXcjcJcryCdxx: WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/xcjc/getXcjcJcryCdxx.do',

    	//外出审核
		getStuSqwcList:WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/modules/wcsh/getStuSqwcList.do',
		getWcshAuditNodeInfo:WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/modules/wcsh/getWcshAuditNodeInfo.do',
		getWcshCurrentStateInfo:WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/modules/wcsh/getWcshCurrentStateInfo.do',
		getStuDetailedSqxx:WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/modules/wcsh/getStuDetailedSqxx.do',
		getAuditInfo:WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/modules/wcsh/getAuditInfo.do',
		getNextState:WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/modules/wcsh/getNextState.do',
		singleWcshAudit:WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/modules/wcsh/singleWcshAudit.do',
		getWcshFrontState:WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/modules/wcsh/getWcshFrontState.do',
		recallWcsh:WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/modules/wcsh/recallWcsh.do',
		statisticWcsqAuditRate:WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/modules/wcsh/statisticWcsqAuditRate.do',


    	//外出申请
    	queryWcsqPageInfo: WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/modules/wcsq/queryWcsqPageInfo.do',
    	queryWcsqShlcInfo: WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/modules/wcsq/queryWcsqShlcInfo.do',
    	saveWcsqApply: WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/modules/wcsq/saveWcsqApply.do',
    	recallWcsqApply: WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/modules/wcsq/recallWcsqApply.do',
    	getWcsqList: WIS_CONFIG.ROOT_PATH + '/sys/swmwcsqglapp/modules/wcsq/getWcsqList.do',

    };
});