<?php

    header("Content-Type: application/json");
    include_once('../class/business-class.php');
    require_once('../class/database-class.php');

    $database = new Database();
    $_POST = json_decode(file_get_contents('php://input'),true);


    switch($_SERVER['REQUEST_METHOD']){

        case 'POST':
            
          
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