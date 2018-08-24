(function () {
   document.addEventListener('DOMContentLoaded', function () {
	var deviceWidth = document.documentElement.clientWidth || document.body.clientWidth;
	var ft=document.documentElement.style.fontSize ;
	document.documentElement.style.fontSize = deviceWidth / 31.25+ 'px';
   		}, false);
   		
window.onresize = function(){
var deviceWidth = document.documentElement.clientWidth;
document.documentElement.style.fontSize = deviceWidth / 31.25+ 'px';
};
})();
