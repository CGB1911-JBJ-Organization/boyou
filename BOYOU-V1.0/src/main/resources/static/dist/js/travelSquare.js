
/*文档事件就绪函数*/
$(function(){
	debugger
	$("#header").load("/doPageModule/header");
	$("#footer").load("/doPageModule/footer");
})

/* 点击更多打开筛选输入框时间事件函数 */
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

