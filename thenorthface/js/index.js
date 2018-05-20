/*-------------ajax----------------*/
;(function(){
	$.ajax({
		type:'get',
		url:'http://127.0.0.1/thenorthface/php/index.php?__hbt=1526362101801',
		dataType:'json',
	}).done(function(d){
		var $goods = $(".solid-group");
		var $html = '';
		$.each(d, function(index,value) {
			$html+=`<a href = "#">
						<img src = "${value.url}"/>
						<p class="goods-name">${value.news}</p>
						<span class="three">${value.price}</span>
						<span class="four">${value.noprice}</span>
					</a>`;
		})
	$goods.append($html);
	})
})
()

/*-----------楼梯效果----------------*/
$(function(){
	var $louti=$('#loutinav');
	var $loutili=$('#loutinav ul li');
	var $louceng=$('.louti');//楼层
	$(window).on('scroll',function(){
		var $st=$(window).scrollTop();
		if($st>=572){
			$louti.show();
		}else{
			$louti.hide();
		} 
		$louceng.each(function(index,element){  
			var $top1=$louceng.eq(index).offset().top;
			if($top1>$st){
				$loutili.removeClass('active');
				$loutili.eq(index).addClass('active');
				return false;
			}
		});		
	});
	$loutili.not('.last').on('click',function(){
		var $top=$louceng.eq($(this).index()).offset().top;
		$('html,body').animate({
			scrollTop:$top
		})
	});
	$('#loutinav ul li.last').on('click',function(){
		$('html,body').animate({
			scrollTop:0
		});
	});
});


/*------------tab切换--------------*/
;(function(){
	var tabbtn = $('.chose-nav ul li');
	var chose = $('#showbox ul');
	tabbtn.on('click',function(){
		$(this).addClass('cc').siblings().removeClass('cc');
		chose.eq($(this).index()).addClass('show').siblings().removeClass('show');	
	})
})()
/*------轮播------*/
	var $btn = $('.btnlist li');
    var $pic = $('.piclist li');
    var $liwidth = $pic.eq(0).width();
    var $num = 0;
    $('.piclist').append($pic.first().clone(true));
    $('.piclist').prepend($pic.last().clone(true));
    $('.piclist').width($('.piclist li').length * $liwidth).css('left', -$liwidth);

    $btn.on('click', function() {
        $num = $(this).index(); 
        tabswitch();
    });

    function tabswitch() {
       $btn.eq($num).addClass('active').siblings('li').removeClass('active');
        $('.piclist').stop(true,true).animate({
            left: -$liwidth * ($num + 1)
        },function(){
            if(parseInt($('.piclist').css('left'))==-($btn.length+1)*$liwidth){
                $('.piclist').css('left',-$liwidth+'px');
                $num=0;
            }
            if(parseInt($('.piclist').css('left'))==0){
                $('.piclist').css('left',-$liwidth*$btn.length+'px');
                $num=$btn.length-1;
            }
        })
    }

    $('.gt').on('click',function(){
        $num++;
        if($num==$btn.length){
             $btn.eq(0).addClass('active').siblings('li').removeClass('active');
        }
        tabswitch();
    })

     $('.lt').on('click',function(){
        $num--;
        tabswitch();
    })

    $('.banner').hover(function(){
        $('.lt,.gt').show();
    },function(){
        $('.lt,.gt').hide();
    });
    


var $bun = $('.bunlist li');
var $img = $('.imglist li');
var $liwidt = $img.eq(0).width();
var $nm = 0;
var timer = null;

$('.imglist').append($img.first().clone(true));
$('.imglist').prepend($img.last().clone(true));
$('.imglist').width($('.imglist li').length * $liwidt).css('left', -$liwidt);


$bun.on('click', function() {
    $nm = $(this).index(); 
    taswitch();
});

function taswitch() {
   $bun.eq($nm).addClass('active').siblings('li').removeClass('active');
    $('.imglist').stop(true,true).animate({
        left: -$liwidt * ($nm + 1)
    },function(){
        if(parseInt($('.imglist').css('left'))==-($bun.length+1)*$liwidt){
            $('.imglist').css('left',-$liwidt+'px');
            $nm=0;
        }
        if(parseInt($('.imglist').css('left'))==0){
            $('.imglist').css('left',-$liwidt*$bun.length+'px');
            $nm=$bun.length-1;
        }
    })
}

$('.gt').on('click',function(){
    $nm++;
    if($nm==$bun.length){
         $bun.eq(0).addClass('active').siblings('li').removeClass('active');
    }
    taswitch();
})

 $('.lt').on('click',function(){
    $nm--;
    taswitch();
})

$('.bottom-banner').hover(function(){
    $('.lt,.gt').show();
},function(){
    $('.lt,.gt').hide();
});

$opicity = $('.swiper-solid');
$opicity.on('mouseover',function(){
	$('.zeg').eq($(this).index()).show();
})
$opicity.on('mouseout',function(){
	$('.zeg').eq($(this).index()).hide();
})


;(function(){
	$.ajax({
		type:'get',
		url:'http://127.0.0.1/thenorthface/php/subnav.php?__hbt=1526432410798',
		dataType:'json',
	}).done(function(d){
		var $erji = $(".erji");
		var $html = '';
		$.each(d, function(index,value) {
			$html+=`<li>
						<a href = "#">
							<p>${value.list1}</p>
							<p>${value.list2}</p>
							<p>${value.list3}</p>
							<p>${value.list4}</p>
							<p>${value.list5}</p>
						</a>
					</li>`;
		})
	$erji.append($html);
	})
})
()

$navbtn = $('.down-nav >ul li');
$navbtn.on('mouseover',function(){
	$('.erji').eq($(this).index()).show();
})
$navbtn.on('mouseout',function(){
	$('.erji').eq($(this).index()).hide();
})


/*---------注册--------*/
function addCookie(key,value,day){
	var date = new Date();
	date.setDate(date.getDate()+day);
	document.cookie = key + '=' + encodeURI(value)+';expires='+date;
}
function getCookie(key){
	var str = decodeURI(document.cookie);
	var arr = str.split('; ');
	for(var i = 0;i < arr.length;i++){
		var arr1 = arr[i].split('=');
		if(arr1[0] == key){
			return arr1[1];
		}
	}
}
function delCookie(key,value){
	addCookie(key,value,-1);
}
$(function(){
	if(getCookie('username')){
		$('.login').hide();
		$('.admin').show().find('span').html('你好,'+getCookie('username'));
	}
	$('.admin a').on('click',function(){
		delCookie('username','',-1);
		$('.admin').hide();
		$('.login').show();
	});
});
