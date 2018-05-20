;(function(){
	$.ajax({
		type:'get',
		url:'http://127.0.0.1/thenorthface/php/details.php?__hbt=1526461038182',
		dataType:'json',
	}).done(function(d){
		var $goods = $(".product-album-img");
		var $html = '';
		$.each(d, function(index,value) {
			$html+=`
						<img src = "${value.img1}" class = "sid-img" sid = "1"/>
						<img src = "${value.img2}" class = "sid-img" sid = "1"/>
						<img src = "${value.img3}" class = "sid-img" sid = "1"/>
						
					`;
		})
	$goods.append($html);
	})
})
()

var $smallpic = $('.product-album-img');
var $smallscale = $('.smallscale');
var $bigscale = $('.bf');
var $bigpic = $('.bpic');
var $picli = $('.list li');
$smallpic.on('mouseover',function(){
	$smallscale.css('visibility','visible');
	$bigscale.css('visibility','visible');
	$smallpic.on('mousemove',function(ev){
	var ev = ev|| window.event;
	var l = ev.pageX-$smallpic.offset().left-$smallscale.width()/2;
	var t = ev.pageY-$smallpic.offset().top-$smallscale.height()/2;
	if(l<0){
		l = 0;
	}else if(l >= $smallpic.width()-$smallscale.width()){
		l = $smallpic.width()-$smallscale.width();
	}
	if(t<0){
		t = 0;
	}else if(t >= $smallpic.height()-$smallscale.height()){
		t = $smallpic.height()-$smallscale.height();
	}
	$smallscale.css({
		left:l,
		top:t
	})
	$bigpic.css({
		left:-$bili*l,
		top:-$bili*t
	})
})
})
$smallscale.css('width',$bigscale.width()*$smallpic.width()/$bigpic.width()+'px');
$smallscale.css('height',$bigscale.height()*$smallpic.height()/$bigpic.height()+'px');
var $bili = parseInt($bigpic.width()/$smallpic.width());

$smallpic.on('mouseout',function(){
	$smallscale.css('visibility','hidden');
	$bigscale.css('visibility','hidden');
})
$picli.on('click',function(){
	$('.product-album-img img').eq($(this).index()).show().siblings().not('.smallscale').hide();
	$('.bpic').eq($(this).index()).show().siblings().hide();
	$('.active').eq($(this).index()).addClass('biankuang').siblings().removeClass('biankuang');
	$('.ten').eq($(this).index()).addClass('sanjiao').parent().siblings().children().removeClass('sanjiao');	
})

$('.spec-block').on('click',function(){
	$('.spec-block .six').eq($(this).index()).css('border-color','#f60').parent().siblings().children().css('border-color','#dddddd');
})


var $jia = $('.jia');
var $jian = $('.jian');
var $shu = $('.none-border input');
$jia.on('click',function(){
	$('.hid').css('display','none')	
	$shu.val(parseInt($shu.val())+1);
	if(parseInt($shu.val())>3){
		$shu.val("3");
		$('.den').css('display','block');
	}else{
		$('.den').css('display','none');
	}	
})
$jian.on('click',function(){
	$('.den').css('display','none')
	$shu.val(parseInt($shu.val())-1);
	if(parseInt($shu.val())<1){
		$shu.val("1");
		$('.hid').css('display','block')
	}else{
		$('.hid').css('display','none')		
	}
})

var sidarr = [];
var numarr = [];
function getcookievalue(){
	if(getCookie('cartsid')){
		sidarr = getCookie('cartsid').split(',');
	}
	if(getCookie('cartnum')){//cartnum：cookie里面数量的名称
		numarr=getCookie('cartnum').split(',');
	}
}

$('.action-item').on('click',function(){
	var sid = $(this).parents('#main').find('.sid-img').attr('sid');
	console.log(sid);
	getcookievalue();
	if($.inArray(sid,sidarr) != -1){
		if(getCookie('cartnum') == ''){
			var num = parseInt($('.action-quantity-input').val());
			numarr[$.inArray(sid,sidarr)] = num;
			addCookie('cartnum',numarr.toString(),7);
			sidarr[$.inArray(sid,sidarr)] = sid;
			addCookie('cartsid',sidarr.toString(),7);
		}else{
			var num = parseInt(numarr[$.inArray(sid,sidarr)])+parseInt($('.action-quantity-input').val());
			numarr[$.inArray(sid,sidarr)] = num;
			addCookie('cartnum',numarr.toString(),7);
		}
	}else{
		sidarr.push(sid);
		addCookie('cartsid',sidarr.toString(),7);
		numarr.push($('.action-quantity-input').val());
		addCookie('cartnum',numarr.toString(),7);
	}
});
