<?PHP
    header("Content-Type: text/html; charset=utf8");
    if(!isset($_POST["submit"])){
        exit("错误执行");
    }//检测是否有submit操作 
    
    $file = fopen("signup.txt", "r") or die("Unable to open file!");
    $name = $_POST['name'];//post获得用户名表单值
    $passowrd = $_POST['password'];//post获得用户密码单值
    $status = 0;
  

    if($name && $passowrd){
      while(!feof($file)) {
        $iname = fgets($file);
        $iname = trim($iname);
        $ipassowrd =fgets($file);
        $ipassowrd = trim($ipassowrd);
        if(($iname === $name) && ($ipassowrd === $passowrd)){
          $status = 1;
          header("refresh:0;url=homepage.html?name=$name");
          exit;
        }
      }
        echo "用户名或密码填写有误";
    }
    else{
      echo "填写不完整";
    }
    
    /*if ($name && $passowrd){//如果用户名和密码都不为空
             $sql = "select * from user where username = '$name' and password='$passowrd'";//检测数据库是否有对应的username和password的sql
             $result = mysql_query($sql);//执行sql
             $rows=mysql_num_rows($result);//返回一个数值
             if($rows){//0 false 1 true
                   header("refresh:0;url=welcome.html");//如果成功跳转至welcome.html页面
                   exit;
             }else{
                echo "用户名或密码错误";
                echo "
                    <script>
                            setTimeout(function(){window.location.href='login.html';},1000);
                    </script>

                ";//如果错误使用js 1秒后跳转到登录页面重试;
             }
             

    }else{//如果用户名或密码有空
                echo "表单填写不完整";
                echo "
                      <script>
                            setTimeout(function(){window.location.href='login.html';},1000);
                      </script>";

                        //如果错误使用js 1秒后跳转到登录页面重试;
    }*/

    fclose($file);
?>