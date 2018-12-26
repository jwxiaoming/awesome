/* 公共点击事件 */
$(function(){

	//modal-show 显示 class
    //modal-hide 隐藏 class
    //#modal-show 最外层模型 #
    //#modal-show-con 最外层模型 #
	/* 20150203 */
	/* =====点击显示===== */
	$(document).on("click",".modal-show",function(){
        $('html').addClass('overflow_hidden');
        $('html').css({'padding-right':15});
        animate_none(".modal-main",30)
	})
	//点击隐藏
	$(document).on("click",".modal-hide",function(){
		animate_none(".modal-main",0,'hide')
	})
	function animate_none(oDiv,val,iclass){
		//判断是否有滚动条
		$(oDiv).removeClass('hide').stop().animate({opacity:val},400);
		$(".modal-body").stop().animate({opacity:val,'margin-top':val},300,function(){
			$(oDiv).addClass(iclass);
            if(!val){
        		$('html').removeClass('overflow_hidden');
        		$('body').css({'padding-right':0});
        	}
		});
	}
	/* =====自定义下拉框===== */
	$(document).on("click",".ui_select span",function(event){
		$("ul.ui_select_list").removeClass('hide');
		event.stopPropagation();
	});
	$(document).on("click",".ui_select ul li",function(){
		var oThis = $(this),
			oUl = oThis.parent(),
			oSpan = $(".ui_select span");
		$(".ui_select ul li").removeClass('on');
		oThis.addClass('on');
		oSpan.text(oThis.text());
		$('.ui_select .ui_select_input').val(oThis.text());
		oSpan.addClass('Selcolor');
		oUl.addClass('hide')
	});
	$(document).click(function(){
		//点击隐藏下拉框
		$("ul.ui_select_list").addClass('hide');
	})
	//阴影告诉
	$(".modal-main").scroll(function(){
		opon();
	});

});

//阴影告诉
function opon(){
	var oDiv = document.getElementById('modal-main');
	if(oDiv.scrollHeight){
		$(".opacity_on").height(oDiv.scrollHeight);
	}
}
window.onscroll=opon;
window.onresize=opon; 
window.onload=opon;


document.writeln("<style>");
/* css弹出框 */
document.writeln(".overflow_hidden{overflow:hidden;}");
document.writeln(".modal-main {position: fixed; top: 0; left: 0; right: 0; bottom: 0;z-index: 1040; overflow-x: hidden; overflow-y: auto;}");
document.writeln(".modal-main .modal-body{background: #fff;margin: 0 auto;min-height: 300px;border-radius:2px;padding:30px 40px 20px 30px;z-index: 1; position: relative; margin:0 auto;}");
document.writeln(".modal-body .modal-close{position:absolute;right:23px;z-index:1;cursor:pointer;top:20px;color:#7d7d7d;font-size:18px;}");
document.writeln(".opacity_on {position:absolute;background: #000;height:100%;opacity: 0.5;top: 0; left: 0; right: 0;}");

/* css下拉选择 */
document.writeln(".ui_select{height:50px;min-width:200px;float:left;border: #e4e9ed 1px solid;border-radius: 2px;}");
document.writeln(".ui_select span{height:50px;padding-right:36px;padding-left:16px;display:block;font-size: 16px;line-height: 50px;color: #bdc3c7;cursor: pointer;}");
document.writeln(".ui_select span.Selcolor{color: #34495e;}");
document.writeln(".ui_select ul{border:1px solid #e4e9ed;left:-1px;right:-1px;position: absolute;top:50px;}");
document.writeln(".ui_select ul li{line-height:50px;height:50px;}");
document.writeln(".ui_select ul li a{display:block;color:#34495e;padding-left:20px;line-height:50px;height:50px;font-size:16px;}");
document.writeln(".ui_select ul li a:hover{background: #ecf0f1;transition:all 0.3s;}");
document.writeln(".ui_select ul li.on{background: #ecf0f1;}");
document.writeln(".ui_select .icon-down-mini{position: absolute;font-size: 24px;right: 5px;top: 13px;}");

document.writeln("</style>");

