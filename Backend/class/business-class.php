<?php

    class Business{
      
        private $name;
        private $acronym;
        private $password;
        private $email;
        private $address;
        private $latitude;
        private $country;
        private $state;
        private $zip;
        private $payment;
        private $name_on_card;
        private $card_number;
        private $card_expiration;
        private $card_cvv;


         public function __construct(
            $name,
            $acronym,
            $password,
            $email,
            $address,
            $latitude,
            $country,
            $state,
            $zip,
            $payment,
            $name_on_card,
            $card_number,
            $card_expiration,
            $card_cvv
        ){
            $this->name = $name;
            $this->acronym = $acronym;
            $this->password = $password;
            $this->email = $email;
            $this->address = $address;
            $this->latitude = $latitude;
            $this->country = $country;
            $this->state = $state;
            $this->zip = $zip;
            $this->payment = $payment;
            $this->name_on_card = $name_on_card;
            $this->card_number = $card_number;
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
         * Get the value of password
         */ 
        public function getPassword()
        {
                return $this->password;
        }

        /**
         * Set the value of password
         *
         * @return  self
         */ 
        public function setPassword($password)
        {
                $this->password = $password;

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
         * Get the value of card_number
         */ 
        public function getCard_number()
        {
                return $this->card_number;
        }

        /**
         * Set the value of card_number
         *
         * @return  self
         */ 
        public function setCard_number($card_number)
        {
                $this->card_number = $card_number;

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


        public function addCompany($db){
            $business = $this->getData();
            $data = $db->getReference('business')
                ->push($business);

            if($data->getKey() != null)
                return '{"mensaje":"Empresa agregada", "key":"'. $data->getKey().'"}';
            else
                return '{"mensaje":"Error al agrear empresa"}'; 

        }

        public function updateCompany($db,$id){
            $data = $db->getReference('business')
                ->getChild($id)
                ->set($this->getData());
    
            if($data->getKey() != null)
                return '{"mensaje":"Usuario actualizado","key":"'.   $data->getKey().'"}';
            else
                return '{"mensaje":"Error al actualizar usuario"}';      
    
        }
    
        public static function deleteCompany($db,$id){
            $db->getReference('business')
                ->getChild($id)
                ->remove();
                
        }
    
        public static function getCompany($db,$id){
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

        public static function businessAuthentication($name,$password,$db){
                $data = $db->getReference('business')
                    ->orderByChild('name')
                    ->equalTo($name)
                    ->getSnapshot()
                    ->getValue();
        
                $key = array_key_first($data);
                $authenticated = password_verify($password,$data[$key]['password']);
                $response['authenticated'] = $authenticated;
                
                if($response['authenticated']){
                    $response['key'] = $key;
                    $response['name'] = $data[$key]['name'];
                    $response['token'] = bin2hex(openssl_random_pseudo_bytes(16));
                    $_SESSION['token'] = $response['token'];
        
                    setcookie('key', $response['key'],time()+(60*60*24*31),'/');
                    setcookie('name', $response['name'],time()+(60*60*24*31),'/');
                    setcookie('token', $response['token'],time()+(60*60*24*31),'/');
                   
        
                    $db->getReference('business/'.$key.'/token')
                        ->set($response['token']);
                    
                }else{
                    setcookie('key', $response['key'],time()-10,'/');
                    setcookie('name', $response['name'],time()-10,'/');
                    setcookie('token', $response['token'],time()-10,'/');
                }
               
                echo json_encode($response);    
            }
        
            public static function verificateAuthentication($db){
                if(isset($_COOKIE['key']))
                    return false;
        
                $data = $db->getReference('business')
                    ->getChild($_COOKIE['key'])
                    ->getValue();
        
                if($response['token'] == $_COOKIE['token'] && $_SESSION['token'] == $_COOKIE['token']){
                    return true;
                }else{
                    return false;
                }    
            }

            public static function saveImg($db,$path,$id){
                $profile = $db->getReference('business/'.$id.'/img')
                    ->set($path);
            }    

        public function getData(){
            $data['name'] = $this->name;
            $data['acronym'] = $this->acronym;
            $data['password'] = password_hash($this->password,PASSWORD_DEFAULT);
            $data['email'] = $this->email;
            $data['address'] = $this->address;
            $data['latitude'] = $this->latitude;
            $data['country'] = $this->country;
            $data['state'] = $this->state;
            $data['zip'] = $this->zip;
            $data['payment'] = $this->payment;
            $data['name_on_card'] = $this->name_on_card;
            $data['card_number'] = $this->card_number;
            $data['card_expiration'] = $this->card_expiration;
            $data['card_cvv'] = $this->card_cvv;
            return $data;
        }
    }


?>

