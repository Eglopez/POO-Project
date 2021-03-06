<?php

    
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Max-Age: 1000");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
    header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
    include_once('../class/user-class.php');
    require_once('../class/database-class.php');

    $database = new Database();
    $_POST = json_decode(file_get_contents('php://input'),true);

    switch($_SERVER['REQUEST_METHOD']){

        case 'POST':

            
            
            $user = new User(
                $_POST['name'],
                $_POST['last_name'],
                $_POST['user_name'],
                $_POST['email_address'],
                $_POST['password'],
                $_POST['confirm_password'],
                $_POST['phone_number'],
                $_POST['profession']  
            );
            echo $_POST['email_address'];
            echo $user->addUser($database->getDB());
            
              
        break;

        case 'GET':
        
            if(isset($_GET['id'])){
                User::getUser($database->getDB(),$_GET['id']);
            }else{
                User::getUsers($database->getDB());
            }
        break;

        case 'PUT':
            

            $_PUT = json_decode(file_get_contents('php://input'),true);
            if(isset($_GET['id'])){
                
                $user = new User(
                    $_PUT['name'],
                    $_PUT['last_name'],
                    $_PUT['user_name'],
                    $_PUT['email_address'],
                    $_PUT['password'],
                    $_PUT['confirm_password'],
                    $_PUT['phone_number'],
                    $_PUT['profession']    
                );
                echo $user->updateUser($database->getDB(),$_GET['id']); 
            }
        break;

        case 'DELETE':
            if(!User::verificateAuthentication($db->getDB())){
                echo '{"mensaje":""Acceso no Autorizado}';
            }
            if(isset($_GET['id']))
                User::deleteUser($database->getDB(),$_GET['id']);
        break;
    }




?>