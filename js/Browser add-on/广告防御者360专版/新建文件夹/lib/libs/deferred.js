function Deferred(){this._done=[],this._fail=[]}Deferred.prototype={execute:function(e,t){var i=e.length;for(t=Array.prototype.slice.call(t);i--;)e[i].apply(null,t)},resolve:function(){this.execute(this._done,arguments)},reject:function(){this.execute(this._fail,arguments)},done:function(e){this._done.push(e)},fail:function(e){this._fail.push(e)}};