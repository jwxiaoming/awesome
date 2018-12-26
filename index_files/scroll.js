window.onload= function(){
	var oContent = document.getElementById("scroll_content");
	var oTxt = getByClass(oContent,"main-content-c")[0];
	var oTarg = getByClass(oContent,"target")[0];
	var oBar = getByClass(oContent,"bar")[0];

	oBar.style.height = oTarg.offsetHeight*(oContent.offsetHeight/oTxt.offsetHeight)+'px';

	oBar.onmousedown = function(ev){
		var oEvent = ev || event;
		var disY = oEvent.clientY - oBar.offsetTop;
		document.onmousemove = function(ev){
			var oEvent = ev || event;
			var t = oEvent.clientY - disY;
			setPos(t);
		}
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;

		   oBar.releaseCapture && oBar.releaseCapture();
		}
		oBar.setCapture && oBar.setCapture();
		oEvent.preventDefault && oEvent.preventDefault();
		return false;
	}
	function setPos(t){
		if(t<0){
			t =0;
		}else if(t>oTarg.offsetHeight-oBar.offsetHeight){
			t = oTarg.offsetHeight-oBar.offsetHeight;
		}
		oBar.style.top = t+'px';

		var scale = t/(oTarg.offsetHeight-oBar.offsetHeight);
		oTxt.style.top = -scale*(oTxt.offsetHeight-oContent.offsetHeight)+'px';

	}

	addMouseWheel(oContent,function(down){
		var t = oBar.offsetTop;
		if(down){
			t +=10;
		}else{
			t -=10;
		}
		setPos(t);
	});

}

function getByClass(oParent,sClass){
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}
	var aEle = oParent.getElementsByTagName("*");
	var aRes = [];
	var reg = new RegExp('\\b'+sClass+'\\b');
	for(var i=0;i<aEle.length;i++){
		if(reg.test(aEle[i].className)){
			aRes.push(aEle[i]);
		}
	}
	return aEle;
}
function addMouseWheel(obj,fn){
	function fnWhell(ev){
		var oEvent = ev || event;
		var bDown = false;

		bDown = oEvent.wheelDelta ? oEvent.wheelDelta<0 : oEvent.detail>0;

		fn && fn(bDown,oEvent);
		oEvent.preventDefault && oEvent.preventDefault();
		return false;
	}
	if(window.navigator.userAgent.toLowerCase().indexOf("firefox")!=-1){
		obj.addEventListener("DOMMouseScroll",fnWhell,false);
	}else{
		addEvent(obj,'mousewheel',fnWhell);
	}
}
function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);
	}else{
		obj.attachEvent('on'+sEv,fn);
	}
}
