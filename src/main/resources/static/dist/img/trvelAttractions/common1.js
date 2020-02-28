var votetype, rlogin = 0, voteobj, votea = ['citydxq', 'citydqg', 'cityxq', 'cityqg', 'travelstj', 'travelstj2', 'travels', 'travels2', 'visa'];
var cityList = null;
$(document).ready(function(){
	$('#s_input').focus(function () {
		if($('#optChange div').text()!='目的地'){
			return;
		}
        if ($(this).val() == '请输入您要搜索的关键词') {
            $(this).val('').css('color', '#000000');
        }
        if ($(this).val() == '') {
            $('#listdestination').hide();
        } else {
            $('#listdestination').show();
        }
    }).blur(function () {
        if ($(this).val() == '') {
            $(this).val('请输入您要搜索的关键词').css('color', '#cccccc');
        }
        setTimeout("$('#listdestination').hide();", 500);
    }).keyup(function (e) {
		if($('#optChange div').text()!='目的地'){
			return;
		}	
        var k = e.keyCode;
        if (k == 38 || k == 40) {
            return;
        } else if (k == 13) {
            $('#s_button').click(); return;
        }
        var v = $.trim($(this).val());
        if (v == '') { $('#listdestination').hide(); return; }
        v = v.toLowerCase();
        $('#listdestination').show();
        var ov = $('#listdestination').attr('v');
        if (ov == undefined) ov = '';
        $('#listdestination').show();
        if (ov == '' || v.substring(0, ov.length) != ov) {
            $('#listdestination').html('<li class="load">数据加载中...</li>');
            var str = '', obj;
			GetCityList();
            if (v.match(/^([a-z]){1,4}$/)) {
                var s = v.substring(0, 1), m = '[t_name^="' + s + '"]'; m1 = ',[t_english^="' + s + '"]';
                for (var i = 1; i < v.length; i++) {
                    s = v.substring(i, i + 1);
                    m += '[t_name*="' + s + '"]'; m1 += '[t_english*="' + s + '"]';
                }
                obj = cityList.filter(m + m1);
            } else {
                obj = cityList.filter('[t_name^="' + v + '"],[t_english^="' + v + '"]');
            }
            obj.each(function () {
                str += '<li name="' + $(this).attr('t_name') + '" english="' + $(this).attr('t_english') + '" para="' + $(this).attr('t_para') + '"><span>';
                if ($(this).attr('t_level') == 1) {
                    str += $(this).find('t_name').text();
                } else {
                    str += cityList.filter('[t_id="' + $(this).attr('t_pid') + '"]').find('t_name').text();
                }
                str += '</span>' + $(this).find('t_name').text() + '</li>';
            });
            $('#listdestination').html(str);
            $('#listdestination').attr('v', v);
            $('#listdestination li[para]').click(function () {
                listdestinationselect(this);
                $('#s_input').click();
            }).mouseover(function () {
                listdestinationselect(this);
            });
            if (obj.length == 0) {
                $('#listdestination').hide();
            }

        } else {
            $('#listdestination li').hide();
            var obj = $('#listdestination li');
            if (v.match(/^([a-z]){1,4}$/)) {
                var s = v.substring(0, 1), m = '[name^="' + s + '"]'; m1 = ',[english^="' + s + '"]';
                for (var i = 1; i < v.length; i++) {
                    s = v.substring(i, i + 1);
                    m += '[name*="' + s + '"]'; m1 += '[english*="' + s + '"]';
                }
                obj = obj.filter(m + m1);
            } else {
                obj = obj.filter('[name^="' + v + '"],[english^="' + v + '"]');
            }
            obj.show();
            if (obj.length == 0) {
                $('#listdestination').hide();
            }
        }
    }).keydown(function (e) {
		if($('#optChange div').text()!='目的地'){
			return;
		}	
        var k = e.keyCode;
        if (k == 38 || k == 40) {
            var o = $('#listdestination>li[para]:visible');
            if (o.length == 0) return;
            var obj;
            var s = o.filter('.dselected');
            if (s.length == 0) {
                obj = (k == 38 ? o.last() : o.first());
            } else {
                var j = o.index(s);
                if (k == 38) {
                    obj = (j == 0 ? o.last() : $(o).get(j - 1));
                } else {
                    obj = (j == o.length - 1 ? o.first() : $(o).get(j + 1));
                }
            }
            listdestinationselect(obj);
            $('#listdestination').scrollTop($(obj).offset().top - $('#listdestination>li[para]:visible:first').offset().top);
            return;
        }
    });
	$('#s_button').click(function(event){
		if($('#optChange div').text()=='目的地'){
			event.preventDefault();	
			var o = $('#listdestination li.dselected');
			location = $('#listdestination').attr('url').replace('cid00', $(o.get(0)).attr('para'));
		}		
	});


	$('.headSearch .sInput,.newsSearch .sInput').focus(function(){//头部搜索框光标
		$('.headSearch .defaultKey,.newsSearch .defaultKey').hide();
	}).blur(function(){
		if(!$.trim($(this).val())){
			$('.headSearch .defaultKey,.newsSearch .defaultKey').show();
			$(this).val('');
		}
	});
	myCity();
	menuToggle();
	goToTop();
	qrCode();
	menuDropDown();
	 mySearch();
	onlineService();
	OnLinePhone();
		$('.ui-tabs-nav > li > a').hover(function(e){ //Tab切换
				if (e.target == this) {
					var tabs = $(this).parent().parent().children('li');
					var panels = $(this).parent().parent().parent().children('.ui-tabs-panel');
					$(this).parent().parent().find('li.bg').removeClass('bg');
					$(this).parent().next().addClass('bg');
					var index = $.inArray(this, $(this).parent().parent().find('a'));
					if (panels.eq(index)[0]) {
						tabs.removeClass('ui-tabs-selected').eq(index).addClass('ui-tabs-selected');
						panels.addClass('ui-tabs-hide').eq(index).removeClass('ui-tabs-hide');
					}
				}
			});
	$('a').bind('focus',function() {if(this.blur) {this.blur()};});// 去除a标签点击时的外部虚线

	    $(".userNavTit1").click(function () { //会员中心左侧
        if ($(this).find('div').hasClass("mores")) {
            $(".curUNav").addClass("mores");
            $(".more").removeClass("curUNav");
            $(this).find('div').removeClass('mores').addClass("curUNav");
        } else {
            if ($(this).find('div').hasClass("curUNav")) {
                return;
            }

            $(this).find('div').addClass('mores');
        }
        $('.userNavText').hide();
        $(this).next('.userNavText').slideToggle("slow");
    });

	$('#loginout').click(function () {	//登出
        $.get(webpath + 'sys/ajax/login.ashx', { act: "out" }, function () {
            checklogin(); getvote();
        });
    });
    $('#login').click(function () {	//登入
        rlogin = 2;
        ShowWindow('', 'alertlogin', webpath + 'alertlogin.aspx');
    });
    checklogin();
    $('#GoToPage').click(function(){var pageNum=parseInt($('#pageIndex').val());if(isNaN(pageNum)){return}var url=window.location.href;var reg=/^(.*page=)\d+(\w*)$/;if(reg.test(url)){url=url=url.replace(reg,'$1'+pageNum+'$2')}else{if(url.indexOf('?')==-1){url+='?page='+pageNum}else{url+='&page='+pageNum}}location.href=url});

	    voteobj = $('[id^="citydxq_"],[id^="citydqg_"],[id^="cityxq_"],[id^="cityqg_"],[id^="travelstj_"],[id^="travels_"],[id^="travelstj2_"],[id^="travels2_"],[id^="visa_"]');
    if (voteobj.length > 0) {
        voteobj.click(function () {
            rlogin = 1;
            var id = $(this).attr('id').split('_');
            if ($(this).attr('status') == 1) {
                if (id[0] == 'visa') {
                    alert('您已经收藏过!');
                }
                return;
            }
            if ((id[0] != 'travelstj' && id[0] != 'travelstj2') && GetCookie('username') == '') {
                votetype = $(this);
                rlogin = 0;
                ShowWindow('', 'alertlogin', webpath + 'alertlogin.aspx'); return;
            }
            favorites(
				id[0],
				id[1],
				function () {
				    if (arguments[0] == 'true') {
				        if (id[0] == "citydxq" || id[0] == "citydqg") {
				            $('#' + id[0] + '_' + id[1]).find("a").removeClass('cur').addClass('cur');
				        } else {
				            $('#' + id[0] + '_' + id[1]).removeClass('voteyes').addClass('voteno');
				        }
				        $('#' + id[0] + 'text_' + id[1]).text((parseInt($('#' + id[0] + 'text_' + id[1]).text()) + 1));
				        if (id[0] == 'visa') {
				            alert('恭喜您收藏成功!');
				        }
				    }
				});
        });
        getvote();
    }
	$('#channelListnav a:last').css({'padding':'0 5px'});
});

function mySearch(){
	$('#optChange').hover(
		function(){
			$(this).find('dl').show();
			$(this).addClass('hover');
		},
		function(){
			$(this).find('dl').hide();
			$(this).removeClass('hover');
		}
	);

	$('#optChange dd').hover(
		function(){$(this).addClass('cur');},
		function(){$(this).removeClass('cur');}
	).click(
		function(){
			var text = $(this).attr('text');
			$('.optionCur').html(text);
			$('#optChange').removeClass('hover').find('dl').hide();
			$('#flpage').attr('action',$(this).attr('url'));
		}
	);
}

//头部下拉菜单
function menuDropDown(){
	$('.headNav li.dropDown').hover(
		function(){
			$(this).find('dl').stop().slideDown();
			$(this).find('a span').addClass('on');
		},function(){
			$(this).find('dl').stop().slideUp();
			$(this).find('a span').removeClass('on');
		}
	);
$('#header li.phone dl').hover(
		function () {
		    $(this).find('dd').show();
		    $(this).find('dt').addClass('hover');
		    $(this).find('dt i').addClass('down');

		}, function () {
		    $(this).find('dd').hide();
		    $(this).find('dt').removeClass('hover');
		    $(this).find('dt i').removeClass('down');
		}
	)

		$('#header li.drop').hover( //顶部快捷菜单下拉
		function () {
		    $(this).find('.infoPop').stop().show();
		    $(this).find('a i').addClass('down');
		}, function () {
		    $(this).find('.infoPop').stop().hide();
		    $(this).find('a i').removeClass('down');
		}
	);
		$('.headNav li.drop').hover(
		function(){
			$(this).find('.infoPop').stop().show();
			$(this).find('span').parent().addClass('on');
		},function(){
			$(this).find('.infoPop').stop().hide();
			$(this).find('span').parent().removeClass('on');
		}
	);
	
	$('.artBox .drop').hover( //顶部快捷菜单下拉
		function () {
		    $(this).find('.infoPop').stop().show();
		    $(this).find('a i').addClass('down');
		}, function () {
		    $(this).find('.infoPop').stop().hide();
		    $(this).find('a i').removeClass('down');
		}
	);
}

//头部城市切换
function myCity(){
	$('#cityChange').hover(
		function(){
			$(this).find('.cityList').show();
			$(this).addClass('hover');
		},
		function(){
			$(this).find('.cityList').hide();
			$(this).removeClass('hover');
		}
	);
}

//左侧菜单
function menuToggle(){
	var arrayli = $('#allClass li');
	arrayli.each(function(i){
		$(this).hover(
			function(){ $(this).addClass('this'); },
			function(){ $(this).removeClass('this'); }
		);
		$(this).find('em').click(function(){ arrayli.removeClass('this'); });
	});
}

function goToTop(){ //返回顶部
	var html = '<div id="backTop" class="backTop clearfix"><a title="返回顶部" href="javascript:;" rel="nofollow">&nbsp;</a></div><div id="message" class="message clearfix"><a title="意见反馈" href="/feedback.aspx" target="_blank"></a></div>';
	$(html).appendTo('body');
	$('#backTop').click(function(){
		$('html,body').animate({scrollTop:0},'slow');//慢慢回到页面顶部
		return false;
	});
	$(window).scroll(function(){
		if($(this).scrollTop() < 300) {//当window的垂直滚动条距顶部距离小于300时
			$('#backTop,#message').fadeOut('slow');//goToTop按钮淡出

		} else {
			$('#backTop,#message').fadeIn('slow');//反之按钮淡入
		}
	});
}

function qrCode(){ //二维码
	var html = '<div id="qrCode" class="qrCode clearfix"><a href="javascript:;" rel="nofollow">&nbsp;<div class="item">&nbsp;</div></a></div>';
	$(html).appendTo('body');
	$('#qrCode a').hover(
		function(){$(this).find('.item').show();},
		function(){$(this).find('.item').hide();}
	);
}

/*在线客服开始*/
function onlineService() {
    if (webconfig('onlineswitch') == 0) return;
    var onlineqqs = webconfig('onlineqq');
    var qq = onlineqqs.split('|');
    var qqone;
    var html = '<div id="fixedService" class="fixedService clearfix" style="z-index:999;">';
    html += '	<div class="outer">';
    html += '		<div class="box">';
    html += '			<div class="hide"><a href="javascript:;" title="关闭在线客服">&nbsp;</a>在线客服</div>';
    html += '			<dl class="clearfix">';
    if (qq.length > 0) {
        for (var i = 0; i < qq.length; i++) {
            qqone = qq[i].split(',');
            html += '				<dd><a target="_blank" href="/wpa.qq.com/msgrd?v=3&uin=' + qqone[1] + '&site=qq&menu=yes" rel="nofollow"><img border="0" src="/wpa.qq.com/pa?p=2:' + qqone[1] + ':41" alt="在线客服" title="' + qqone[0] + '"/></a>';
        }
    }
    html += '				<dd><a href="' + webpath + 'feedback.aspx" class="tool">意见反馈</a></dd>';
    html += '			</dl>';
    html += '			<div class="tel">' + webconfig('sitetel') + '</div>';
    html += '		</div>';
    html += '	</div>';
    html += '</div>';
    $(html).appendTo('body');

    $(window).scroll(function () { //在线客服跟随滚动
        var scrollTop = $(window).scrollTop();
        $('div#fixedService').stop().animate({ top: scrollTop + 236 });
    });

    $('.fixedService .box .hide a').click(function () { //在线客服左侧隐藏
        $('#fixedService').animate({ width: '0', right: '0' }, 300);
        $('#fixedService .box').hide();
    });
}
/*在线客服结束*/


/*弹出登陆回调*/
function AlertLoginReturn() {
    checklogin();
    HideWindow();
    if (rlogin == 0) {
        votetype.click();
    } else if (rlogin == 1) {
        getvote();
    }
}
/*检测登陆*/
function checklogin() {
    if (GetCookie('username') == '') {
        $('#logined').hide();
        $('[unlogin]').show();
    } else {
        $('[unlogin]').hide();
        $('#logined_name').text(GetCookie('realname') == '' ? GetCookie('username') : GetCookie('realname'));
        $('#logined').show();
        $.ajax({
            type: "GET",
            url: webpath + 'sys/Ajax/GetUserInfoCount.ashx',
            cache: false,
            dataType: "json",
            success: function (json) {
                if (json.CountSMS > 0) {
                    if ($(".sitemsg").length > 0) {
                        $('.sitemsg').html('站内信:<a href="' + json.url + '" >未读(' + json.CountSMS + ')</a>');
                    } else {
                        $('#logined').append('<span class="sitemsg">站内信:<a href="' + json.url + '" >未读(' + json.CountSMS + ')</a></span>');
                    }
                }
            }
        });
    }
}

//右上角旅游电话
function OnLinePhone(){
	if($('#travelphone').length == 0){return;}
	var onlinephones = webconfig('onlinephone');
	var phonelist = onlinephones.split('|');
	var htmlstr = '';
	var onephone = [];
	if(onlinephones !='' && phonelist.length > 0)
	{
		for(var j=0; j< phonelist.length; j++){
			onephone = phonelist[j].split(',');
			htmlstr += '<p>' +  onephone[0] + ': &nbsp;' + onephone[1] + '</p>';
		}
		$('#travelphone').html(htmlstr);
	}
}
//城市库
function GetCityList(){
	if(cityList == null){
		$.ajax({ type: "get",
            cache: true,
            async: false,
            url: webpath + 'sys/xml/citylibrary.xml',
            success: function (xml) {
                cityList = $(xml).find('row');
                cityList.each(function () {
                    $(this).attr({ t_name: $(this).find('t_name').text().toLowerCase(), t_english: $(this).find('t_english').text().toLowerCase(), t_para: $(this).find('t_para').text() });
                });
            }
        });
	}
}
function listdestinationselect(o) {
    $('#listdestination>li').removeClass('dselected');
    $(o).addClass('dselected').select();
    $('#s_input').val($(o).attr('name'));
}
//投票与收藏
function getvote() {
    if (voteobj.length == 0) return;
    var url = webpath + 'sys/ajax/getvote.ashx?t=', adid = '', f, f1 = '';
    for (var i = 0; i < votea.length; i++) {
        f = voteobj.filter('[id^="' + votea[i] + '_"]');
        if (f.length != 0) {
            url += votea[i] + ',';
            f1 += '&' + votea[i] + 'id=';
            f.each(function () {
                f1 += $(this).attr('id').replace(votea[i] + '_', '') + ',';
            });
            f1 = f1.substring(0, f1.length - 1);
        }
    }
    url = url.substring(0, url.length - 1) + f1 + '&callback=?';
    $.getJSON(url,
		 function (json) {
		     for (var i = 0; i < json.length; i++) {
		         for (var j = 0; j < json[i].item.length; j++) {
		             var t = json[i].item[j];
		             //$('#' + json[i].type + 'text_' + t.adid).text(t.votes);
		             $('#' + json[i].type + '_' + t.adid).attr('status', t.status);
		             if (t.status == 1) {
		                 if (json[i].type == "citydxq" || json[i].type == "citydqg") {
		                     $('#' + json[i].type + '_' + t.adid).find('a').removeClass('cur').addClass('cur');
		                 } else {
		                     $('#' + json[i].type + '_' + t.adid).removeClass('voteyes').addClass('voteno');
		                     if ($('#' + json[i].type + 'text_' + t.adid).length > 0) {
		                         $('#' + json[i].type + 'text_' + t.adid).text(t.votes);
		                     }
		                 }
		             } else {
		                 if (json[i].type == "citydxq" || json[i].type == "citydqg") {
		                     $('#' + json[i].type + '_' + t.adid).find('a').removeClass('cur');

		                     
		                 } else {
		                     $('#' + json[i].type + '_' + t.adid).removeClass('voteno').addClass('voteyes');

		                     if ($('#' + json[i].type + 'text_' + t.adid).length > 0) {
		                         $('#' + json[i].type + 'text_' + t.adid).text(t.votes);
		                     }
		                 }
		             }
		         }
		     }
		     $('[id^="cityxq_"]').each(function () {
		         var adid = $(this).attr('id').split('_')[1];
		         if (parseInt($('#cityxqtext_' + adid).text()) + parseInt($('#cityxqtext_' + adid).text()) < 10) {
		             $('#cityvotelevel_' + adid).removeClass().addClass('s3');
		         }
		     });
		 }
	);
};