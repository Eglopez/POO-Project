<?php

require_once('../vendor/autoload.php');
use Kreait\Firebase\Factory;


class Database{

    private $serviceAccount = '../Secret/poo-project-d289a-6a0e4df6121a.json';
    private $uri = 'https://poo-project-d289a.firebaseio.com/';
    private $db;

    public function __construct(){
        $firebase = (new Factory)
        ->withServiceAccount($this->serviceAccount)
        ->withDatabaseUri($this->uri);

        $this->db = $firebase->createDatabase();
    }

    public function getDB(){
        return $this->db;    
    }


    
}


?>