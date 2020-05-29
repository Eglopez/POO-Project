<?php

    
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Max-Age: 1000");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
    header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
    include_once('../class/product-class.php');
    require_once('../class/database-class.php');

    $database = new Database();
    $_POST = json_decode(file_get_contents('php://input'),true);

    switch($_SERVER['REQUEST_METHOD']){

        case 'POST':

            
            
            if(isset($_GET['id'])){
                $product = new Product(
                    $_POST['name'],
                    $_POST['description'],
                    $_POST['price'],
                    $_POST['previous_price'],
                    $_POST['img'],
                    $_POST['amount'],
                    $_POST['category'] 
                );
                echo $product->addProduct($_GET['id'],$database->getDB());
            }
            
              
        break;

        case 'GET':        
            if(isset($_GET['id'],$_GET['product'])){
                Product::getProduct($database->getDB(),$_GET['id'],$_GET['product']);
            }else if(isset($_GET['id'])){
                Product::getProducts($database->getDB(),$_GET['id']);
            }
        break;

        case 'PUT':
            $_PUT = array();
            if(isset($_GET['id'],$_GET['product'])){
                parse_str(file_get_contents("php://input"),$_PUT);
                $product = new Product(
                    $_POST['name'],
                    $_POST['description'],
                    $_POST['price'],
                    $_POST['previous_price'],
                    $_POST['img'],
                    $_POST['amount'],
                    $_POST['category']   
                );
                echo $product->updateProduct($database->getDB(),$_GET['id'],$_GET['product']); 
            }
        break;

        case 'DELETE':
            if(isset($_GET['id']))
                User::deleteUser($database->getDB(),$_GET['id']);
        break;
    }




?>