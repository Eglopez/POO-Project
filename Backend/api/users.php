<?php

    header("Content-Type: application/json");
    include_once('../class/user-class.php');
    require_once('../class/database-class.php');

    $database = new Database();


    switch($_SERVER['REQUEST_METHOD']){

        case 'POST':
            
            $user = new User(
                $_POST['name'],
                $_POST['last_name'],
                $_POST['user_name'],
                $_POST['email'],
                $_POST['password'],
                $_POST['confirm_password'],
                $_POST['gender']  
            );
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
            $_PUT = array();
            if(isset($_GET['id'])){
                parse_str(file_get_contents("php://input"),$_PUT);
                $user = new User(
                    $_PUT['name'],
                    $_PUT['last_name'],
                    $_PUT['user_name'],
                    $_PUT['email'],
                    $_PUT['password'],
                    $_PUT['confirm_password'],
                    $_PUT['gender']    
                );
                echo $user->updateUser($database->getDB(),$_GET['id']); 
            }
        break;

        case 'DELETE':
            if(isset($_GET['id']))
                User::deleteUser($database->getDB(),$_GET['id']);
        break;
    }




?>