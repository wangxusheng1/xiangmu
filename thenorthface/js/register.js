$(function(){
	var bstop = true;
	var usereg = /^1[3|5|7|8]\d{9}$/;
	$('#username').on('blur',function(){
		var username = $(this).val();
		if(username!=''){
			if(usereg.test(username)){
				$.ajax({
					type:'post',
					url:'http://127.0.0.1/thenorthface/php/register.php',
					data:{
						name:username
					},
					success:function(d){
						$('#username').next('span').css('visibility','visible')
						if(d){
							$('#username').next('span').css('color','red').html('手机号已被注册');
							bstop = true;
						}else{
							$('#username').next('span').css('color','green').html('√');
							bstop = false;
						}
					}
				})
			}else{
				$('#username').next('span').css('visibility','visible')
				$(this).next('span').css('color','red').html('手机号格式不正确');
				bstop = true;
			}
		}else{
			$('#username').next('span').css('visibility','visible')
			$(this).next('span').css('color','red').html('手机号不能为空');
			bstop = true;
		}
	});
	$('form').on('submit',function(){
		if(bstop){
			return false;
		}
		alert('注册成功');
	});
});
