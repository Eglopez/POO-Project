<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

include_once('../class/purchases-class.php');
require_once('../class/database-class.php');

    $database = new Database();
    $_POST = json_decode(file_get_contents('php://input'),true);

    switch($_SERVER['REQUEST_METHOD']){

        case 'POST':
            if(isset($_GET['id'])){
                $purchase = new Purchase(
                    $_POST['productName'],
                    $_POST['productPrice'],
                    $_POST['amount'],
                    $_POST['payment'],
                    $_POST['productImg'],
                    $_POST['product_description'],
                    $_POST['productBusiness']                   
                );
                
                echo $purchase->addPurchase($_GET['id'],$database->getDB());
            }
            
              
        break;

        case 'GET':
        
            if(isset($_GET['id'],$_GET['purchase'])){
                Purchase::getPurchase($_GET['id'],$_GET['purchase'],$database->getDB());
            }else if(isset($_GET['id'])){
                Purchase::getPurchases($_GET['id'],$database->getDB());
            }
        break;

        case 'PUT':
        break;

        case 'DELETE':
        break;
    }

?>