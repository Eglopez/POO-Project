<?php

    header("Content-Type: application/json");
    include_once('../class/user-class.php');
    require_once('../class/database-class.php');

    $database = new Database();


    switch($_SERVER['REQUEST_METHOD']){

        case 'POST':
            
          echo  User::userAuthentication($_POST['user_name'],$_POST['password'],$database->getDB());
            
              
        break;

        case 'GET':
        break;

        case 'PUT':
        break;

        case 'DELETE':    
        break;
    }




?>