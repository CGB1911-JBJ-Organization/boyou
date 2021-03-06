﻿var editor = new Array();
//添加编辑器
function AddEditor(id, tool, RanNum) {
    //$.include([webpath + 'sys/webedit/ueditor.config.js', webpath + 'sys/webedit/ueditor.all.js']);
    var config = {
        imageUrl: webpath + "sys/ajax/editor/ImageUp.ashx?r=" + RanNum,     //图片上传地址
        imagePath: upfolder,                                   //图片修正地址，引用了fixedImagePath,如有特殊需求，可自行配置
        scrawlUrl: webpath + "sys/ajax/editor/ScrawlImgUp.ashx?r=" + RanNum, //涂鸦上传地址
        scrawlPath: upfolder,                                          //图片修正地址，同imagePath
        catcherUrl: webpath + "sys/ajax/editor/GetRemoteImage.ashx?r=" + RanNum, //处理远程图片抓取的地址
        catcherPath: upfolder,                         //图片修正地址，同imagePath
        snapscreenHost: 'ueditor.baidu.com',                            //屏幕截图的server端文件所在的网站地址或者ip，请不要加http://
        snapscreenServerUrl: webpath + "sys/ajax/editor/ImageUp.ashx?r=" + RanNum, //屏幕截图的server端保存程序，UEditor的范例代码为“URL +"server/upload/net/snapImgUp.ashx"”
        snapscreenPath: upfolder,

        wordImageUrl: webpath + "sys/ajax/editor/ImageUp.ashx?r=" + RanNum, //word转存提交地址
        wordImagePath: upfolder, //
        getMovieUrl: webpath + "sys/ajax/editor/GetMovie.ashx",    //视频数据获取地址
        initialFrameWidth: '100%',
        focus: false,
        toolbars: [
                ['fullscreen', 'source', '|', 'undo', 'redo', '|',
                    'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
                    'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
                    'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
                    'directionalityltr', 'directionalityrtl', 'indent', '|',
                    'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
                    'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
                    'insertimage', 'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'insertframe', 'insertcode', 'webapp', 'pagebreak', 'template', 'background', '|',
                    'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
                    'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', '|',
                    'print', 'preview', 'searchreplace', 'help']
            ]
    };
    if (!tool) tool = 'full';
    if (tool == 'simple') {
        config.toolbars[0] = ['source', '|', 'undo', 'redo', '|',
            'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
            'rowspacingtop', 'rowspacingbottom', 'lineheight'];
    } else if (tool != 'full') {
        config.toolbars[0] = $.map(config.toolbars[0], function (n) {
            return n != 'pagebreak' ? n : null;
        });
    }
    editor[id] = UE.getEditor(id, config);
}

$(document).ready(function () {
    mySearch();
    goToTop();
    subNav();
    bindFavorites();
    $('img[data-original]').lazyload({ threshold: 100 }); //图片延时加载
    $(".drop").hover(function () {//头部下拉
        $(this).find('.dropDown').show();
        $(this).addClass('hover');

    }, function () {
        $(this).find('.dropDown').hide();
        $(this).removeClass('hover');
    });

    $('#loginout').click(function () {
        $.get(webpath + 'sys/ajax/user/login.ashx', { act: "out" }, function () {
            checklogin(); bindFavorites();
        });
    });
    $('#login,#logins').click(function () {
        ShowWindow('', 'alertlogin', webpath + 'alertlogin.aspx');
    });
    checklogin();
    $(".headNav .navList li").each(function () {
        if ($(this).find(".subnav .list a").length == 0) {
            $(this).removeClass("on");
            $(this).unbind("mouseover");
        }
    });
});
function refund(module,id) { 
    
}
//会员中心左侧
$(".userNavTit1").click(function () {
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


//头部搜索切换
function mySearch() {
    $('#optChange').hover(
		function () {
		    $(this).find('dl').show();
		    $(this).addClass('hover');
		},
		function () {
		    $(this).find('dl').hide();
		    $(this).removeClass('hover');
		}
	);
	$("#s_input").prop('autocomplete', 'on');
	$('#optChange dd').hover(
		function () { $(this).addClass('cur'); },
		function () { $(this).removeClass('cur'); }
	).click(
		function () {
		    var placeholder = $(this).attr('defaultkey');
		    $('#s_input').attr('placeholder', placeholder);
		    $('.optionCur').html($(this).attr('text'));
		    //$('#defaultKey').text($(this).attr('defaultkey'));
		    $('#optChange').removeClass('hover').find('dl').hide();
		    $('#searchform').attr('action', $(this).attr('url'));
		    $('#s_input').val('').attr('search', '');
		    //$('#defaultKey').show();
		    if (placeholder.indexOf('酒店') == -1 && placeholder.indexOf('景点') == -1) {
		        return;
		    }
		    placeholder = placeholder.indexOf('酒店') == -1 ? 'scenery' : 'hotel';
		    if ($("#s_input").prop('autocomplete') == 'off') {
		        $('#s_input').attr('search', placeholder);
		        return;
		    }
		    $('#s_input').attr('search', placeholder);
		    if (!$.isFunction($('#s_input').autocomplete)) {
		        $.include(webpath + 'sys/css/ui-lightness/jquery-ui.css');
		        $.include(webpath + 'sys/js/jquery-ui.js');
		    }
		    $('#s_input').autocomplete({
		        minLength: 1,
		        source: function (request, response) {
		            if ($('#s_input').attr('search') == '') return false;
		            $.ajax({
		                url: webpath + "sys/ajax/" + $('#s_input').attr('search') + "/search.ashx",
		                type: "get",
		                datatype: "json",
		                data: { 'key': request.term },
		                type: "get",
		                contentType: "application/json",
		                success: function (db) {
		                    response($.map(db, function (n) {
		                        return { value: n.name, id: n.id, url: n.url };
		                    }))
		                }
		            });
		        },
		        select: function (event, ui) {
		            $(event.target).val(ui.item.value);
		            window.open(ui.item.url, "_blank");
		        }
		    });
		    $('.ui-autocomplete').css({ 'z-index': 999999, "max-height": "200px", "overflow-y": "auto" });
		}
	).first().click();

	var searchHotel = $('input[search="hotel"]'), searchScenery=$('input[search="scenery"]');
	if (searchHotel.length+searchScenery.length>0) {
		if (!$.isFunction($('').autocomplete)) {
		    $.include(webpath + 'sys/css/ui-lightness/jquery-ui.css');
		    $.include(webpath + 'sys/js/jquery-ui.js');
		}
		searchHotel.autocomplete({
		    minLength: 1,
		    source: function (request, response) {
		        $.ajax({
		            url: webpath + "sys/ajax/hotel/search.ashx",
		            type: "get",
		            datatype: "json",
		            data: { 'key': request.term },
		            type: "get",
		            contentType: "application/json",
		            success: function (db) {
		                response($.map(db, function (n) {
		                    return { value: n.name, id: n.id, url: n.url };
		                }))
		            }
		        });
		    },
		    select: function (event, ui) {
		        $(event.target).val(ui.item.value);
		    }
		});
		searchScenery.autocomplete({
		    minLength: 1,
		    source: function (request, response) {
		        $.ajax({
		            url: webpath + "sys/ajax/scenery/search.ashx",
		            type: "get",
		            datatype: "json",
		            data: { 'key': request.term },
		            type: "get",
		            contentType: "application/json",
		            success: function (db) {
		                response($.map(db, function (n) {
		                    return { value: n.name, id: n.id, url: n.url };
		                }))
		            }
		        });
		    },
		    select: function (event, ui) {
		        $(event.target).val(ui.item.value);
		    }
		});
		$('.ui-autocomplete').css({ 'z-index': 999999, "max-height": "200px", "overflow-y": "auto" });
	}
}
//二级导航
function subNav() {
    $('.headNav').find('li').hover(
		function () {
		    if ($(this).hasClass('on')) {
		        $(this).addClass('up');
		        $('.navBg').show().stop().animate({ height: 39 }, 300);
		        $(this).find('.subnav').show().stop().animate({ height: 39 }, 500);

		        var subL = $(this).position().left; //一级菜单相对父级的距离
		        var subW = $(this).find('.list').width(); //二级菜单的宽度
		        var navWidth = $(this).width(); //当前菜单的宽度
		        var w = subL + navWidth / 2 - subW / 2;
		        var wc = subW + w - 1200;
		        if (wc > 0) {
		            $(this).find('.list').css("padding-left", w - wc - 10);
		        } else {
		            $(this).find('.list').css("padding-left", w);
		        }
		    }
		},
		function () {
		    if ($(this).hasClass('on')) {
		        $(this).removeClass('up');
		        $('.navBg').show().hide().stop().animate({ height: 0 }, 300);
		        $(this).find('.subnav').hide().stop().animate({ height: 0 }, 500);
		    }
		}
	);
}





//返回顶部
function goToTop() {
    var tophtml = '<div id="izl_rmenu" class="izl-rmenu">';
    tophtml += '<div class="btn btn-top"></div></div>';
    $(tophtml).appendTo('body');
    $("#izl_rmenu").each(function () {
        $(this).find(".btn-wx").mouseenter(function () {
            $(this).find(".pic").fadeIn("fast");
        });
        $(this).find(".btn-wx").mouseleave(function () {
            $(this).find(".pic").fadeOut("fast");
        });
        $(this).find(".btn-phone").mouseenter(function () {
            $(this).find(".pic").fadeIn("fast");
        });
        $(this).find(".btn-phone").mouseleave(function () {
            $(this).find(".pic").fadeOut("fast");
        });
        $(this).find(".btn-top").click(function () {
            $("html, body").animate({
                "scroll-top": 0
            }, "fast");
        });
    });
    var lastRmenuStatus = false;
    $(window).scroll(function () {//bug
        var _top = $(window).scrollTop();
        if (_top > 200) {
            $("#izl_rmenu").data("expanded", true);
        } else {
            $("#izl_rmenu").data("expanded", false);
        }
        if ($("#izl_rmenu").data("expanded") != lastRmenuStatus) {
            lastRmenuStatus = $("#izl_rmenu").data("expanded");
            if (lastRmenuStatus) {
                $("#izl_rmenu .btn-top").slideDown();
            } else {
                $("#izl_rmenu .btn-top").slideUp();
            }
        }
    });
}

/*弹出登陆回调*/
function AlertLoginReturn() {
    checklogin();
    HideWindow();
    bindFavorites();
}

/*检测登陆*/
function checklogin() {
    if (GetCookie('username') == '') {
        $('#logined').hide();
        $('#unlogin').show();
    } else {
        $('#unlogin').hide();
        $('#logined_name').text(GetCookie('realname') == '' ? GetCookie('username') : GetCookie('realname'));
        $('#logined').show();
        var userInfo = $('#logined_name').parent().parent().find('.userInfo');
        if (userInfo.length == 1) {
            $('#logined_name').parent().parent().hover(
			    function () {
			        var top = $(this).position().top + $(this).height();
			        var left = $(this).position().left;
			        $(this).find('.userInfo').show().css({ top: top, left: left });
			    },
			    function () { $(this).find('.userInfo').hide(); }
		    );
        }
        $.ajax({
            type: "GET",
            url: webpath + 'sys/Ajax/User/UnreadMessage.ashx',
            cache: false,
            dataType: "json",
            success: function (json) {
                if (json.CountSMS > 0) {
                    if (userInfo.length == 1) {
                        userInfo.find('dl>dd').slice(1,2).find('a').html('未读短信(' + json.CountSMS + ')');
                        return;
                    }
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
function bindFavorites() {
    var favoritesObj = $('[favorites]');
    if (favoritesObj.length == 0) return;
    var Modules = {};
    favoritesObj.each(function () {
        var val = $(this).attr('favorites').split(',');
        if (typeof (Modules[val[0]]) === 'undefined') {
            Modules[val[0]] = val[1];
        } else {
            Modules[val[0]] += ',' + val[1];
        }
    });
    favoritesObj.unbind("click").click(function () {
        if ($(this).attr('status') == 1) {
            if ($(this).attr('favorites').indexOf('travelstj') != -1) {
                alert('您已推荐,无需重复推荐.');
            } else {
                alert('您已收藏,无需重复收藏.');
            }
            return;
        }
        var val = $(this).attr('favorites').split(',');
        var act = '';
        var mid = 0;
        if (val[0] == 'travelstj') {
            act = 'tj';
            val[0] = 'travels';
        } else if (val[0].indexOf('city') != -1) {
            act = val[0].replace('city', '');
            val[0] = 'city';
        } else if (val[0].indexOf('generic_') != -1) {
            mid = val[0].replace('generic_', '');
            val[0] = 'generic';
        }
        if (GetCookie('username') == '' && act != 'tj') {
            alert('请先登录!');
            return;
        }
        var url;
        if (val[0] == 'city') {
            url = webpath + 'sys/ajax/cityFavorites.ashx?id=' + val[1] + '&act=' + act;
        } else {
            url = webpath + 'sys/ajax/' + val[0] + '/Favorites.ashx?id=' + val[1] + '&act=' + act + '&mid=' + mid;
        }
        $.ajax({ url: url,
            cache: false, context: this,
            success: function (data) {
                $(this).attr('status', 1);
                var obji = $(this).find('.favoritestext');
                if (obji.length == 0) obji = $(this).parent().find('.favoritestext');
                if (obji.length != 0) {
                    obji.text(parseInt(obji.text()) + 1);
                }
                if (val[0] == 'city') {
                    $(this).addClass('cur');
                    return;
                } else {
                    if ($(this).find('.fa').length == 0) {
                        $(this).addClass("on");
                    } else {
                        $(this).find('.fa').removeClass("fa-star-o").addClass("fa-star");
                    }
                }
                if ($(this).attr('favorites').indexOf('travelstj') != -1) {
                    alert('推荐成功。');
                } else {
                    alert('收藏成功。');
                }
            }
        });
    });
    for (var key in Modules) {
        var m = key;
        var act = 'get';
        var mid = 0;
        if (m == 'travelstj') {
            act = 'gettj';
            m = 'travels';
        } else if (key.indexOf('city') != -1) {
            act = 'get' + key.replace('city', '');
            m = 'city';
        } else if (key.indexOf('generic_') != -1) {
            mid = key.replace('generic_', '');
            m = 'generic';
        }
        var url;
        if (m == 'city') {
            url = webpath + 'sys/ajax/cityFavorites.ashx?act=' + act + '&id=' + Modules[key] + '&callback=?';
        } else {
            url = webpath + 'sys/ajax/' + m + '/Favorites.ashx?act=' + act + '&id=' + Modules[key] + '&mid=' + mid + '&callback=?';
        }
        $.getJSON(url,
		        function (json) {
		            for (var i = 0; i < json.length; i++) {
		                var t = json[i];
		                var obj = favoritesObj.filter('[favorites="' + t.type + ',' + t.adid + '"]');
		                obj.attr('status', t.status);
		                var obji;
		                obji = obj.find('.favoritestext');
		                if (obji.length == 0) obji = obj.parent().find('.favoritestext');
		                if (obji.length != 0) {
		                    obji.text(t.favorites);
		                }
		                if (t.type == "city") {
		                    if (t.status == 1) {
		                        obj.addClass('cur');
		                    } else {
		                        obj.removeClass("cur")
		                    }
		                } else {
		                    obji = obj.find('.fa');
		                    if (obji.length == 0) {
		                        if (t.status == 1) {
		                            obj.addClass("on")
		                        } else {
		                            obj.removeClass("on")
		                        }
		                    } else {
		                        var c = 'heart';
		                        if (obji.hasClass('fa-star-o') || obji.hasClass('fa-star')) c = 'star';
		                        if (t.status == 1) {
		                            obj.find('.fa').removeClass('fa-' + c + '-o').addClass('fa-' + c);
		                        } else {
		                            obj.find('.fa').removeClass('fa-' + c).addClass('fa-' + c + '-o');
		                        }
		                    }
		                }
		            }
		        }
	        );
    }
}
var mapArray = [],
markerArray;
function loadMap(container, mapType, nid, title, mapmarked, address) {
    if (!mapArray[container]) {
        mapArray[container] = {
            container: container,
            type: mapType,
            marker: []
        }
    }
    mapArray[container].marker.push({
        nid: nid,
        title: title,
        mapmarked: mapmarked,
        address: address
    });
    if (mapType == 'google') {
        LoadGoogleMap()
    } else {
        loadBaiduMap()
    }
}
function loadBaiduMap() {
    if (typeof (BMap) == 'undefined') {
        $.ajax({
            type: "GET",
            url: "http://api.map.baidu.com/api?key=&v=1.2&services=true&callback=loadBaiduMap",
            dataType: "script",
            timeout: 1000,
            error: function () {
                for (var key in mapArray) {
                    var n = mapArray[key];
                    if (n.type != 'google' && !n.load) {
                        $('#' + n.container).html('百度地图加载失败');
                    }
                }
            }
        });
        return
    }
    for (var key in mapArray) {
        var n = mapArray[key];
        if (n.type == 'google' || !!n.load) continue;
        n.load = 1;
        $.each(n.marker,
        function (j, m) {
            if (m.nid.indexOf(',') == -1) return;
            var nid = m.nid.split(',');
            var point = new BMap.Point(nid[1], nid[0]);
            if (!n.map) {
                var setZoom = 18;
                if (nid.length > 2) {
                    setZoom = parseInt(nid[2])
                }
                var map = new BMap.Map(n.container);
                map.centerAndZoom(point, setZoom);
                map.enableScrollWheelZoom();
                map.enableDoubleClickZoom();
                map.enableKeyboard();
                var ctrl_nav = new BMap.NavigationControl({
                    anchor: BMAP_ANCHOR_TOP_LEFT,
                    type: BMAP_NAVIGATION_CONTROL_SMALL
                });
                map.addControl(ctrl_nav);
                n.map = map
            }
            var icon = {
                w: 21,
                h: 21,
                l: 0,
                t: 0,
                x: 6,
                lb: 5
            };
            var iconImg = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(icon.w, icon.h), {
                imageOffset: new BMap.Size(-icon.l, -icon.t),
                infoWindowOffset: new BMap.Size(icon.lb + 5, 1),
                offset: new BMap.Size(icon.x, icon.h)
            });
            var marker = new BMap.Marker(point, {
                icon: iconImg
            });
            var label = new BMap.Label(m.title, {
                "offset": new BMap.Size(icon.lb - icon.x + 10, -20)
            });
            marker.setLabel(label);
            n.map.addOverlay(marker);
            label.setStyle({
                borderColor: "#808080",
                color: "#333",
                cursor: "pointer"
            }); (function () {
                var _iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + m.title + "'>" + m.title + "</b><div class='iw_poi_content'>地址：" + m.address + "</div>");
                var _marker = marker;
                _marker.addEventListener("click",
                function () {
                    this.openInfoWindow(_iw)
                });
                _iw.addEventListener("open",
                function () {
                    _marker.getLabel().hide()
                });
                _iw.addEventListener("close",
                function () {
                    _marker.getLabel().show()
                });
                label.addEventListener("click",
                function () {
                    _marker.openInfoWindow(_iw)
                });
                label.hide();
                _marker.openInfoWindow(_iw);
            })()
        });
        if (!n.map) {
            $('#' + n.container).html('暂无')
        }
    }
}
function LoadGoogleMap() {
    if (typeof (google) != 'undefined' && !!google.maps) {
        googleMapInit()
    }
    $.ajax({
        type: "GET",
        url: "http://ditu.google.cn/maps/api/js?sensor=false&callback=googleMapInit",
        dataType: "script",
        timeout: 1000,
        error: function () {
            for (var key in mapArray) {
                var n = mapArray[key];
                if (n.type == 'google' && !n.load) {
                    $('#' + n.container).html('google地图加载失败');
                }
            }
        }
    })
}
function googleMapInit() {
    for (var key in mapArray) {
        var n = mapArray[key];
        if (n.type != 'google' || !!n.load) continue;
        n.load = 1;
        $.each(n.marker,
        function (j, m) {
            if (m.mapmarker.indexOf(',') == -1) return;
            var mapmarker = m.mapmarker.split(',');
            if (!n.map) {
                var mapOptions = {
                    zoom: 13,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                mapOptions.center = new google.maps.LatLng(mapmarker[0], mapmarker[1]);
                if (mapmarker.length > 2) {
                    mapOptions.zoom = parseInt(mapmarker[2]);
                    if (mapmarker.length > 3) {
                        if (mapmarker[3] == 'satelite') {
                            mapOptions.mapTypeId = google.maps.MapTypeId.SATELLITE
                        } else if (mapmarker[3] == 'hybrid') {
                            mapOptions.mapTypeId = google.maps.MapTypeId.HYBRID
                        } else if (mapmarker[3] == 'terrain') {
                            mapOptions.mapTypeId = google.maps.MapTypeId.TERRAIN
                        }
                    }
                }
                n.map = new google.maps.Map($('#' + n.container)[0], mapOptions);
                var marker = new google.maps.Marker({
                    map: n.map,
                    position: mapOptions.center,
                    title: m.address
                })
            } else {
                var marker = new google.maps.Marker({
                    map: n.map,
                    position: (new google.maps.LatLng(mapmarker[0], mapmarker[1])),
                    title: m.address
                })
            }
        });
        if (!n.map) {
            $('#' + n.container).html('暂无')
        }
    }
}