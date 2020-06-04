<?php

    
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Max-Age: 1000");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
    header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
    include_once('../class/sucursal-class.php');
    require_once('../class/database-class.php');

    $database = new Database();
    $_POST = json_decode(file_get_contents('php://input'),true);

    switch($_SERVER['REQUEST_METHOD']){

        case 'POST':

            
            
            if(isset($_GET['id'])){
                $sucursal = new Sucursal(
                    $_POST['name'],
                    $_POST['address'],
                    $_POST['latitude'],
                    $_POST['longitud']
                    
                );
                echo $sucursal->addSucursal($_GET['id'],$database->getDB());
            }
            
              
        break;

        case 'GET':        
            if(isset($_GET['id'],$_GET['sucursal'])){
                Sucursal::getSucursal($database->getDB(),$_GET['id'],$_GET['sucursal']);
            }else if(isset($_GET['id'])){
                Sucursal::getSucursals($database->getDB(),$_GET['id']);
            }
        break;

        case 'PUT':
        break;

        case 'DELETE':  
        break;
    }




?>