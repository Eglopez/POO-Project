<?php

class User{
    private $name;
    private $last_name;
    private $user_name;
    private $email_address;
    private $password;
    private $confirm_password;
    private $phone_number;
    private $gender;


    public function __construct(

        $name,
        $last_name,
        $user_name,
        $email_address,
        $password,
        $confirm_password,
        $phone_number,
        $gender
    ){
        
        $this->name = $name;
        $this->last_name = $last_name;
        $this->user_name = $user_name;
        $this->email_address = $email_address;
        $this->password = $password;
        $this->confirm_password = $confirm_password;
        $this->phone_number = $phone_number;
        $this->gender = $gender;
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
     * Get the value of last_name
     */ 
    public function getLast_name()
    {
        return $this->last_name;
    }

    /**
     * Set the value of last_name
     *
     * @return  self
     */ 
    public function setLast_name($last_name)
    {
        $this->last_name = $last_name;

        return $this;
    }

    /**
     * Get the value of user_name
     */ 
    public function getUser_name()
    {
        return $this->user_name;
    }

    /**
     * Set the value of user_name
     *
     * @return  self
     */ 
    public function setUser_name($user_name)
    {
        $this->user_name = $user_name;

        return $this;
    }

    /**
     * Get the value of email
     */ 
    public function getEmail_address()
    {
        return $this->email_address;
    }

    /**
     * Set the value of email
     *
     * @return  self
     */ 
    public function setEmail_address($email_address)
    {
        $this->email_address = $email_address;


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
     * Get the value of confirm_password
     */ 
    public function getConfirm_password()
    {
        return $this->confirm_password;
    }

    /**
     * Set the value of confirm_password
     *
     * @return  self
     */ 
    public function setConfirm_password($confirm_password)
    {
        $this->confirm_password = $confirm_password;

        return $this;
    }


    /**
     * Get the value of phone_number
     */ 
    public function getPhone_number()
    {
        return $this->phone_number;
    }

    /**
     * Set the value of phone_number
     *
     * @return  self
     */ 
    public function setPhone_number($phone_number)
    {
        $this->phone_number = $phone_number;

        return $this;
    }

    /**
     * Get the value of gender
     */ 
    public function getGender()
    {
        return $this->gender;
    }

    /**
     * Set the value of gender
     *
     * @return  self
     */ 
    public function setGender($gender)
    {
        $this->gender = $gender;

        return $this;
    }

    public function __toString(){
        return json_encode($this->getData());
    }

    public function addUser($db){
        $users = $this->getData(); 
        $data = $db->getReference('users')
            ->push($users);
        
            if($data->getKey() != null)
                return '{"mensaje":"Usuario almacenado","key":"'.   $data->getKey().'"}'.json_encode($users);
            else
                return '{"mensaje":"Error al almacenar usuario"}';          
    }

    public function updateUser($db,$id){
        $data = $db->getReference('users')
            ->getChild($id)
            ->set($this->getData());

        if($data->getKey() != null)
            return '{"mensaje":"Usuario actualizado","key":"'.   $data->getKey().'"}';
        else
            return '{"mensaje":"Error al actualizar usuario"}';      

    }

    public static function deleteUser($db,$id){
        $db->getReference('users')
            ->getChild($id)
            ->remove();
            
    }

    public static function getUser($db,$id){
        $data = $db->getReference('users')
            ->getChild($id)
            ->getValue();

        echo json_encode($data);    
    }

    public static function getUsers($db){
        $data = $db->getReference('users')
            ->getSnapshot()
            ->getValue();
        echo json_encode($data);    
    }

    public function getData(){
        $data['name'] = $this->name;
        $data['last_name'] = $this->last_name;
        $data['user_name'] = $this->user_name;
        $data['email_address'] = $this->email_address;
        $data['password'] = $this->password;
        $data['confirm_password'] = $this->confirm_password;
        $data['phone_number'] = $this->phone_number;
        $data['gender']  = $this->gender;
        return $data;
    }
}



?>