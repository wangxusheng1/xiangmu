<?php
	header('content-type:text/html;charset = utf-8');
	$conn = @mysql_connect('localhost','root','');
	if(!$conn){
		die('数据库连接失败'.mysql_error());
	}
	mysql_select_db('goods');
	mysql_query('SET NAMES UTF8');
	$query='select * from list';	
	$result=mysql_query($query);
	$arr=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);//数组的每一项是另外一个数组，二维数组
	}
	
	echo json_encode($arr);
?>