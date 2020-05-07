<?php

    header("Content-Type: application/json");
    include_once('../class/business-class.php');
    require_once('../class/database-class.php');

    $db = new Database();

    switch($_SERVER['REQUEST_METHOD']){

        case 'POST':
            
            $company = new Company(
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

            echo $company->addCompany($db->getDB());
            echo $_POST['name'];
            

        break;


        case 'GET':
            if(isset($_GET['id'])){
                Company::getCompany($db->getDB(),$_GET['id']);
            }else{
                Company::getBusiness($db->getDB());
            }
        break;


        case 'PUT':
            $_PUT = array();
            if(isset($_GET['id'])){
                parse_str(file_get_contents("php://input"),$_PUT);
                $company = new Company(
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
                echo $company->updateCopany($db->getDB(),$_GET['id']); 
            }
        break;


        case 'DELETE':
            if(isset($_GET['id']))
                Company::deleteCompany($db->getDB(),$_GET['id']);
        break;

    }



?>