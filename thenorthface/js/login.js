function addCookie(key,value,day){
	var date=new Date();//创建日期对象
	date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
	document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
}
$('#username').on('blur',function(){
	var username = $(this).val();
	if(username == ''){
		$('#username').next('span').css('visibility','visible');
		$('#username').next('span').css('color','red').html('手机号不能为空');
	}else{
		$('#username').next('span').css('visibility','hidden');
	}
})
$('#password').on('blur',function(){
	var password = $(this).val();
	if(password == ''){
		$('#password').next('span').css('visibility','visible');
		$('#password').next('span').css('color','red').html('密码不能为空');
	}else{
		$('#password').next('span').css('visibility','hidden');
	}
})
$('#btn').on('click',function(){
	var $username = $('#username').val();
	var $password = $('#password').val();
	$.ajax({
		type:"post",
		url:"php/login.php",
		data:{
			name:$username,
			pass:$password
		},
		success:function(data){
			if(!data){
				$('#error').css('visibility','visible')
				$('#error').html('用户名或密码错误');
				$('#password').val('');
			}else{
				addCookie('username',$username,7);
				location.href = 'index.html';
			}
		}
	})
});
