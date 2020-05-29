<?php

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Max-Age: 1000");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
    header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
    include_once('../class/user-class.php');
    include_once('../class/business-class');
    require_once('../class/database-class.php');

    $database = new Database();
    $_POST = json_decode(file_get_contents('php://input'),true);


    switch($_SERVER['REQUEST_METHOD']){

        case 'POST':
            
           User::userAuthentication($_POST['user_name'],$_POST['password'],$database->getDB());
           Business::businessAuthentication($_POST['name'],$_POST['password'],$database->getDB());
                          
        break;

        case 'GET':
        break;

        case 'PUT':
        break;

        case 'DELETE':    
        break;
    }




?>