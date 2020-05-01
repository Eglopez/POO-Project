<?php

class User{
    private $name;
    private $last_name;
    private $user_name;
    private $email;
    private $password;
    private $confirm_password;
    private $gender;


    function __construct(

        $name,
        $last_name,
        $user_name,
        $email,
        $password,
        $confirm_password,
        $gender
    ){
        
        $this->name = $name;
        $this->last_name = $last_name;
        $this->user_name = $user_name;
        $this->emal = $email;
        $this->password = $password;
        $this->confirm_password = $confirm_password;
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

    public function addUser($db){
        $users = $this->getData(); 
        $data = $db->getReference('users')
            ->push($users);
        
            if($data->getKey() != null)
                return '{"mensaje":"Usuario almacenado","key":"'.   $data->getKey().'"}';
            else
                return '{"mensaje":"Error al almacenar usuario"}';          
    }

    public function getData(){
        $data['name'] = $this->name;
        $data['last_name'] = $this->last_name;
        $data['user_name'] = $this->user_name;
        $data['email'] = $this->email;
        $data['password'] = $this->password;
        $data['confirm_password'] = $this->confirm_password;
        $data['gender']  = $this->gender;
        return $data;
    }
}



?>