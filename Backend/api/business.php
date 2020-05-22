<?php

    header("Content-Type: application/json");
    include_once('../class/business-class.php');
    require_once('../class/database-class.php');

    $db = new Database();
    $_POST = json_decode(file_get_contents('php://input'),true);

    switch($_SERVER['REQUEST_METHOD']){

        case 'POST':
            
            $business = new Business(
                $_POST['name'],
                $_POST['acronym'],
                $_POST['email'],
                $_POST['address'],
                $_POST['latitude'],
                $_POST['country'],
                $_POST['state'],
                $_POST['zip'],
                $_POST['payment'],
                $_POST['name_on_card'],
                $_POST['card_number'],
                $_POST['card_expiration'],
                $_POST['card_cvv']
            );

            echo $business->addCompany($db->getDB());
            echo $_POST['name'];
            

        break;


        case 'GET':
            if(isset($_GET['id'])){
                Business::getCompany($db->getDB(),$_GET['id']);
            }else{
                Business::getBusiness($db->getDB());
            }
        break;


        case 'PUT':
            $_PUT = array();
            if(isset($_GET['id'])){
                parse_str(file_get_contents("php://input"),$_PUT);
                $business = new Business(
                    $_POST['name'],
                    $_POST['acronym'],
                    $_POST['email'],
                    $_POST['address'],
                    $_POST['latitude'],
                    $_POST['country'],
                    $_POST['state'],
                    $_POST['zip'],
                    $_POST['payment'],
                    $_POST['name_on_card'],
                    $_POST['card_number'],
                    $_POST['card_expiration'],
                    $_POST['card_cvv']
                );
                echo $business->updateCompany($db->getDB(),$_GET['id']); 
            }
        break;


        case 'DELETE':
            if(isset($_GET['id']))
                Business::deleteCompany($db->getDB(),$_GET['id']);
        break;

    }



?>