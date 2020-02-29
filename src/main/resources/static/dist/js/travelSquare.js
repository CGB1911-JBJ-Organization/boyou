
/*文档事件就绪函数*/
$(function(){
	$("#header").load("/doPageModule/header");
	$("#footer").load("/doPageModule/footer");
	$(".showArea").load("/travelSquare/dofindTravelNotes");
})

/* 点击更多事件函数,打开筛选输入框,输入时间 */
function openPayLine2(moreButton){
    /* console.log("开始"); */
    var status = $(moreButton).text();
    if (status == "更多>") {
       $(moreButton).text("收起<");
	}else{
       $(moreButton).text("更多>");
	}
    $(moreButton).parent().next().toggle(120);
}

