<?php

 class Sucursal{
     private $name;
     private $address;
     private $latitude;
     private $longitud;

     public function __construct($name,$address,$latitude,$longitud){
         $this->name = $name;
         $this->address = $address;
         $this->latitude = $latitude;
         $this->longitud = $longitud;
     }

     /**
      * Get the value of name
      */ 
     public function getName()
     {
          return $this->name;
     }

     /**
      * Set the value of name
      *
      * @return  self
      */ 
     public function setName($name)
     {
          $this->name = $name;

          return $this;
     }

     /**
      * Get the value of address
      */ 
     public function getAddress()
     {
          return $this->address;
     }

     /**
      * Set the value of address
      *
      * @return  self
      */ 
     public function setAddress($address)
     {
          $this->address = $address;

          return $this;
     }

     /**
      * Get the value of latitude
      */ 
     public function getLatitude()
     {
          return $this->latitude;
     }

     /**
      * Set the value of latitude
      *
      * @return  self
      */ 
     public function setLatitude($latitude)
     {
          $this->latitude = $latitude;

          return $this;
     }

     /**
      * Get the value of longitud
      */ 
     public function getLongitud()
     {
          return $this->longitud;
     }

     /**
      * Set the value of longitud
      *
      * @return  self
      */ 
     public function setLongitud($longitud)
     {
          $this->longitud = $longitud;

          return $this;
     }

     public function addSucursal($id,$db){
        $sucursal = $this->getData();
        $data = $db->getReference('business/'.$id.'/sucursals')
            ->push($sucursal);

        if($data->getKey() != null)
            return '{"mensaje":"Producto agregad", "key":"'. $data->getKey().'"}';
        else
            return '{"mensaje":"Error al agrear producto"}'; 
    }


    public static function getSucursal($db,$id,$id_sucursal){
        $sucursal = $db->getReference('business/'.$id.'/sucursals')
            ->getChild($id_sucursal)
            ->getValue();

        echo json_encode($sucursal); 
    }

    public static function getSucursals($db,$id){
        $sucursals = $db->getReference('business/'.$id.'/')
            ->getChild('sucursals')
            ->getSnapshot()
            ->getValue();
        echo json_encode($sucursals);
        
    }


     public function getData(){
         $data['name'] = $this->name;
         $data['address'] = $this->address;
         $data['latitude'] = $this->latitude;
         $data['longitud'] = $this->longitud;
         return $data;
     }
 }

?>