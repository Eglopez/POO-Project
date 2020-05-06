<?php

class Business{
    
    private $name;
    private $acronym;
    private $email;
    private $address;
    private $latitude;
    private $country;
    private $state;
    private $zip;
    private $payment;
    private $name_on_card;
    private $credit_number;
    private $card_expiration;
    private $card_cvv;


    function __constructor(
        $name,
        $acronym,
        $email,
        $address,
        $latitude,
        $country,
        $state,
        $zip,
        $payment,
        $name_on_card,
        $credit_number,
        $card_expiration,
        $card_cvv
    ){
        $this->name = $name;
        $this->acronym = $acronym;
        $this->email = $email;
        $this->address = $address;
        $this->latitude = $latitude;
        $this->country = $country;
        $this->state = $state;
        $this->zip = $zip;
        $this->payment = $payment;
        $this->name_on_card = $name_on_card;
        $this->credit_number = $credit_number;
        $this->card_expiration = $card_expiration;
        $this->card_cvv = $card_cvv;
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
     * Get the value of acronym
     */ 
    public function getAcronym()
    {
        return $this->acronym;
    }

    /**
     * Set the value of acronym
     *
     * @return  self
     */ 
    public function setAcronym($acronym)
    {
        $this->acronym = $acronym;

        return $this;
    }

    /**
     * Get the value of email
     */ 
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @return  self
     */ 
    public function setEmail($email)
    {
        $this->email = $email;

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
     * Get the value of country
     */ 
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * Set the value of country
     *
     * @return  self
     */ 
    public function setCountry($country)
    {
        $this->country = $country;

        return $this;
    }

    /**
     * Get the value of state
     */ 
    public function getState()
    {
        return $this->state;
    }

    /**
     * Set the value of state
     *
     * @return  self
     */ 
    public function setState($state)
    {
        $this->state = $state;

        return $this;
    }

    /**
     * Get the value of zip
     */ 
    public function getZip()
    {
        return $this->zip;
    }

    /**
     * Set the value of zip
     *
     * @return  self
     */ 
    public function setZip($zip)
    {
        $this->zip = $zip;

        return $this;
    }

    /**
     * Get the value of payment
     */ 
    public function getPayment()
    {
        return $this->payment;
    }

    /**
     * Set the value of payment
     *
     * @return  self
     */ 
    public function setPayment($payment)
    {
        $this->payment = $payment;

        return $this;
    }

    /**
     * Get the value of name_on_card
     */ 
    public function getName_on_card()
    {
        return $this->name_on_card;
    }

    /**
     * Set the value of name_on_card
     *
     * @return  self
     */ 
    public function setName_on_card($name_on_card)
    {
        $this->name_on_card = $name_on_card;

        return $this;
    }

    /**
     * Get the value of credit_number
     */ 
    public function getCredit_number()
    {
        return $this->credit_number;
    }

    /**
     * Set the value of credit_number
     *
     * @return  self
     */ 
    public function setCredit_number($credit_number)
    {
        $this->credit_number = $credit_number;

        return $this;
    }

    /**
     * Get the value of card_expiration
     */ 
    public function getCard_expiration()
    {
        return $this->card_expiration;
    }

    /**
     * Set the value of card_expiration
     *
     * @return  self
     */ 
    public function setCard_expiration($card_expiration)
    {
        $this->card_expiration = $card_expiration;

        return $this;
    }

    /**
     * Get the value of card_cvv
     */ 
    public function getCard_cvv()
    {
        return $this->card_cvv;
    }

    /**
     * Set the value of card_cvv
     *
     * @return  self
     */ 
    public function setCard_cvv($card_cvv)
    {
        $this->card_cvv = $card_cvv;

        return $this;
    }

    public function __toString(){
        return json_encode($this->getData());
    }

    public function addBusiness($db){
        $business = $this->getData(); 
        $data = $db->getReference('business')
            ->push($business);
        
            if($data->getKey() != null)
                return '{"mensaje":"Empresa almacenada","key":"'.   $data->getKey().'"}';
            else
                return '{"mensaje":"Error al almacenar Empresa"}';          
    }

    public function updateBusiness($db,$id){
        $data = $db->getReference('business')
            ->getChild($id)
            ->set($this->getData());

        if($data->getKey() != null)
            return '{"mensaje":"Usuario actualizado","key":"'.   $data->getKey().'"}';
        else
            return '{"mensaje":"Error al actualizar usuario"}';      

    }

    public static function deleteBusiness($db,$id){
        $db->getReference('business')
            ->getChild($id)
            ->remove();
            
    }

    public static function getBusines($db,$id){
        $data = $db->getReference('business')
            ->getChild($id)
            ->getValue();

        echo json_encode($data);    
    }

    public static function getBusiness($db){
        $data = $db->getReference('business')
            ->getSnapshot()
            ->getValue();
        echo json_encode($data);    
    }

    public function getData(){
        $data['name'] = $this->name;
        $data['acronym'] = $this->acronym;
        $data['email'] = $this->email;
        $data['latitude'] = $this->latitude;
        $data['country'] = $this->country;
        $data['state'] = $this->state;
        $data['zip'] = $this->zip;
        $data['payment'] = $this->payment;
        $data['name_on_card'] = $this->name_on_card;
        $data['credit_number'] = $this->credit_number;
        $data['card_expiration'] = $this->card_expiration;
        $data['card_cvv']  = $this->card_cvv;
        return $data;
    }

}




?>

