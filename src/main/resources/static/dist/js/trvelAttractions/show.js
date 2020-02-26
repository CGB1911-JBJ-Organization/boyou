var Container;
var SceneryID;

/*弹出登陆回调*/
function AlertLoginReturn() {
    checklogin();
    HideWindow();
    if (typeof (top.frames["sceneryReviews"]) != "undefined") {
        top.frames["sceneryReviews"].location.reload();
        top.frames["sceneryQuestions"].location.reload();
    }
}

function sbooking(url) {
    if (GetCookie('username') != '') { location = url; return; }
    ShowWindow('', '', webpath + 'BookingLogin.aspx?Page=' + URLencode(url));
}
function SendScenerySms(ID) {
    if (GetCookie('username') == '') { ShowWindow('', 'alertlogin', webpath + 'alertlogin.aspx'); return; }
    $.get(webpath + "sys/ajax/Scenery/SendAddress.ashx", { id: ID }, function (data) { if (data != 'ok') { alert(data); } else { alert('发送成功!'); } }, 'text');
}
$(document).ready(function () {
    $('#index').removeClass('cur');
    $('#scenery').addClass('cur');
    SceneryID = $('#sceneryid').val();
    $('.TicketsPromotion').each(function () {
        if ($(this).find('p').length > 0) {
            $(this).show();
        }
    });

    $('.bookings').click(function () {//立即预订定位
        var pos = $('#ticketBox').offset().top;
        $('html,body').animate({ scrollTop: pos }, 300);
    });
    $('.ticketBoxs').click(function () {//立即预订定位
        var pos = $('#ticketBox').offset().top;
        $('html,body').animate({ scrollTop: pos }, 300);
    });
    $('.commentr').click(function () {//点评定位
        var pos = $('#comment').offset().top - 44;
        $('html,body').animate({ scrollTop: pos }, 300);
    });
    $('.picMore').click(function () {//图片定位
        var pos = $('#gallerys').offset().top - 44;
        $('html,body').animate({ scrollTop: pos }, 300);
    });
    $('.map').click(function () {//地图定位
        var pos = $('#maps').offset().top - 44;
        $('html,body').animate({ scrollTop: pos }, 300);
    });
    $('.btnFaq').click(function () {//地图定位
        var pos = $('#consults').offset().top - 44;
        $('html,body').animate({ scrollTop: pos }, 300);
    });


    imagePreview();
    $('.row1 a').click(function () {//门票更多
        if ($(this).hasClass('closed')) {
            $(this).removeClass('closed');
            $(this).addClass('open');
            $(this).parents('dl').next('.describe').slideDown();
        } else {
            $(this).addClass('closed');
            $(this).removeClass('open');
            $(this).parents('dl').next('.describe').slideUp();
        }
    });

    $('.comment .more').click(function () {//点评更多显示
        var obj = $(this).parents('dd').find('.moreInfo');
        if (obj.is(':hidden')) {
            obj.slideDown();
            $(this).addClass('moreUp');
        } else {
            obj.slideUp();
            $(this).removeClass('moreUp');
        }
    });

    $('.mainCon .navBox').pin({//菜单跟随
        containerSelector: '.mainCon'
    });

    $('.mainBox .hotSales').pin({//右侧跟随
        containerSelector: '.mainBox'
    });

    $('.tips').hover( //下拉文字提示
		function () {
		    $(this).css({ 'z-index': 100 }).find('.hoverTip').show();
		}, function () {
		    $('.tips').css({ 'z-index': 1 });
		    $(this).find('.hoverTip').hide();
		}
	);

    $('.focusBox').slide({ effect: 'fold', autoPlay: true, delayTime: 800 });

    $('.mainCon .navBox li').click(function () { //点击菜单定位到相应的位置
        var tag = $(this).attr('tag');
        var pos = $('.' + tag).offset().top - 44;
        $('.mainCon .navBox li').find('a').removeClass('cur');
        $(this).find('a').addClass('cur');
        $('html,body').animate({ scrollTop: pos }, 0);
    });

    $(window).scroll(function () { //菜单跟随选中
        var scrollTop = $(window).scrollTop();
        var height = $('.mainCon .navBox').height() - 0;
        if (scrollTop) {
            $('.mainCon .itemBox').each(function (i) {
                if ((scrollTop + height) >= $(this).offset().top) {
                    var myClass = $(this).attr('id');
                    $('.mainCon .navBox li').find('a').removeClass('cur');
                    $('.mainCon .navBox li[tag="' + myClass + '"]').find('a').addClass('cur');
                }
            });
            if (scrollTop > $('#intros').offset().top) {
                $('.mainCon li.goTicket').show();
            } else {
                $('.mainCon li.goTicket').hide();
            }
        }
    });


    /*页面加载：定位幻灯图片的查看更多图片的显示位置*/
    var li = $('.focusBox .hd li').last();
    if (li.length != 0) {
        var apendLeft = li.position().left + 10;
        var apendTop = li.position().top + 36;
        $('.focusBox .hd .more').css({ 'left': apendLeft, 'top': apendTop }).click(function () {
            var pos = $('#gallery').offset().top;
            $('html,body').animate({ scrollTop: pos }, 300);
        });
    }
    //满意度
    $('[sceneryreviewss]').each(function () {
        var r = parseInt($(this).attr('sceneryreviewss'));
        var h = parseInt($(this).attr('haoping'));
        $(this).html((r == 0 ? 100 : Math.round(h / r * 100)) + '%');
    });
});

this.imagePreview = function () {	 //鼠标经过放大图片
    xOffset = 5;
    yOffset = 20;
    $("a.preview").hover(function (e) {
        this.t = this.title;
        this.title = "";
        var c = (this.t != "") ? "<br/>" + this.t : "";
        $("body").append("<div id='preview'><img src='" + this.rel + "' alt='Image preview' />" + c + "</div>");
        var w = $('#preview').width() + e.pageX;
        var d = $('#preview').width();
        var s = document.body.clientWidth;
        $("#preview").css("top", (e.pageY - xOffset) + "px").fadeIn("fast");
        if (w > s) {
            $("#preview").css("left", (e.pageX - yOffset - d) + "px");
        } else {
            $("#preview").css("left", (e.pageX + yOffset) + "px");
        }

    },
			function () {
			    this.title = this.t;
			    $("#preview").remove();
			});
    $("a.preview").mousemove(function (e) {
        var w = $('#preview').width() + e.pageX;
        var d = $('#preview').width();
        var s = document.body.clientWidth;
        $("#preview").css("top", (e.pageY - xOffset) + "px");
        if (w > s) {
            $("#preview").css("left", (e.pageX - yOffset - d) + "px");
        } else {
            $("#preview").css("left", (e.pageX + yOffset) + "px");
        }
    });
};	
