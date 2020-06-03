<?php
     header("Access-Control-Allow-Origin: *");
     header("Access-Control-Allow-Credentials: true");
     header("Access-Control-Max-Age: 1000");
     header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
     header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
     include_once('../class/user-class.php');
     require_once('../class/database-class.php');

     $db = new Database();

    if(isset($_FILES['user-img'])){
        $name = $_FILES['user-img']['name'];
        $temp = $_FILES['user-img']['tmp_name'];

        if($name && $temp){
            $path = '../../Frontend/img/'.$_POST['usuario'].'.jpg';
            move_uploaded_file($temp,$path);
            $new_path = '../img/'.$_POST['usuario'].'.jpg';

            echo json_encode($new_path);

            User::saveImg($db->getDB(),$new_path,$_GET['id']);
        }
    }

?>