<?php

session_start();
session_destroy();

setcookie('key','',time()-10,'/');
setcookie('user_name','',time()-10,'/');
setcookie('token','',time()-10,'/');
setcookie('name','',time()-10,'/');

header('location: ../../Frontend/index.html');

?>