(function(global){
	'use strict';
	window.requestSoftAnim = window.requestAnimFrame = (function(){
		return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
			function(callback){
				window.setTimeout(callback, 1000 / 60);
			};
	})();
})(window);