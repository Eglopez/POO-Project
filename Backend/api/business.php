<?php



    header("Content-Type: application/json");
    include_once('../class/business-class.php');
    require_once('../class/database-class.php');

    $database = new Database();


    switch($_SERVER['REQUEST_METHOD']){

        case 'POST':
            
            $business = new Business(
                $_POST['name'],
                $_POST['acronym'],
                $_POST['email'],
                $_POST['latitude'],
                $_POST['country'],
                $_POST['state'],
                $_POST['zip'],
                $_POST['payment'],
                $_POST['name_on_card'],
                $_POST['credit_number'],
                $_POST['card_expiration'],
                $_POST['card_cvv']  
            );
            echo $business->addBusiness($database->getDB());
              
        break;

        case 'GET':
            if(isset($_GET['id'])){
                User::getBusines($database->getDB(),$_GET['id']);
            }else{
                User::getBusiness($database->getDB());
            }
        break;

        case 'PUT':
            $_PUT = array();
            if(isset($_GET['id'])){
                parse_str(file_get_contents("php://input"),$_PUT);
                $business = new Business(
                    $_PUT['name'],
                    $_PUT['acronym'],
                    $_PUT['email'],
                    $_PUT['latitude'],
                    $_PUT['country'],
                    $_PUT['state'],
                    $_PUT['zip'],
                    $_PUT['payment'],
                    $_PUT['name_on_card'],
                    $_PUT['credit_number'],
                    $_PUT['card_expiration'],
                    $_PUT['card_cvv'] 
                );
                echo $business->updateBusiness($database->getDB(),$_GET['id']); 
            }
        break;

        case 'DELETE':
            if(isset($_GET['id']))
                User::deleteBusiness($database->getDB(),$_GET['id']);
        break;
    }





?>