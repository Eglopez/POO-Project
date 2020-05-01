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
                User::getUser($_GET['id']);
            }else{
                User::getUsers();
            }
        break;

        case 'PUT':
            //Update User
        break;

        case 'DELETE':
            //Delete User
        break;
    }




?>