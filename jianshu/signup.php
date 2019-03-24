<?php 
    header("Content-Type: text/html; charset=utf8");

    if(!isset($_POST['submit'])){
        exit("错误执行");
    }//判断是否有submit操作

    $name=$_POST['name'];//post获取表单里的name
    $password=$_POST['password'];//post获取表单里的password

    $signupfile = fopen("signup.txt", "a+") or die("Unable to open file!");
    fwrite($signupfile,$name);
    fwrite($signupfile,"\r\n");
    fwrite($signupfile,$password);
    fwrite($signupfile,"\r\n");
    fclose($signupfile);

?>