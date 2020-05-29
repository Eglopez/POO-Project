<?php
     header("Access-Control-Allow-Origin: *");
     header("Access-Control-Allow-Credentials: true");
     header("Access-Control-Max-Age: 1000");
     header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
     header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
    if(isset($_FILES['product-img'])){
        $name = $_FILES['product-img']['name'];
        $temp = $_FILES['product-img']['tmp_name'];

        if($name && $temp){
            $path = '../../Frontend/img/'.$_POST['name-product'].'.jpg';
            move_uploaded_file($temp,$path);
            $new_path = '../img/'.$_POST['name-product'].'.jpg';

            echo json_encode($new_path);
        }
    }

?>