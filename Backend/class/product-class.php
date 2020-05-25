<?php

    class Product{
        private $name;
        private $description;
        private $price;
        private $previous_price;
        private $img;
        private $amount;
        private $category;


        public function __construct(
            $name,
            $description,
            $price,
            $previous_price,
            $img,
            $amount,
            $category
        ){
            $this->name = $name;
            $this->description = $description;
            $this->price = $price;
            $this->previous_price = $previous_price;
            $this->img = $img;
            $this->amount = $amount;
            $this->category = $category;
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
         * Get the value of description
         */ 
        public function getDescription()
        {
                return $this->description;
        }

        /**
         * Set the value of description
         *
         * @return  self
         */ 
        public function setDescription($description)
        {
                $this->description = $description;

                return $this;
        }

        /**
         * Get the value of price
         */ 
        public function getPrice()
        {
                return $this->price;
        }

        /**
         * Set the value of price
         *
         * @return  self
         */ 
        public function setPrice($price)
        {
                $this->price = $price;

                return $this;
        }

        /**
         * Get the value of previous_price
         */ 
        public function getPrevious_price()
        {
                return $this->previous_price;
        }

        /**
         * Set the value of previous_price
         *
         * @return  self
         */ 
        public function setPrevious_price($previous_price)
        {
                $this->previous_price = $previous_price;

                return $this;
        }

        /**
         * Get the value of img
         */ 
        public function getImg()
        {
                return $this->img;
        }

        /**
         * Set the value of img
         *
         * @return  self
         */ 
        public function setImg($img)
        {
                $this->img = $img;

                return $this;
        }

        /**
         * Get the value of amount
         */ 
        public function getAmount()
        {
                return $this->amount;
        }

        /**
         * Set the value of amount
         *
         * @return  self
         */ 
        public function setAmount($amount)
        {
                $this->amount = $amount;

                return $this;
        }

        /**
         * Get the value of category
         */ 
        public function getCategory()
        {
                return $this->category;
        }

        /**
         * Set the value of category
         *
         * @return  self
         */ 
        public function setCategory($category)
        {
                $this->category = $category;

                return $this;
        }

        public function addProduct($id,$db){
            $product = $this->getData();
            $data = $db->getReference('business/'.$id.'/products')
                ->push($product);

            if($data->getKey() != null)
                return '{"mensaje":"Producto agregad", "key":"'. $data->getKey().'"}';
            else
                return '{"mensaje":"Error al agrear producto"}'; 
        }
        
        public static function getProduct($db,$id,$id_product){
            $product = $db->getReference('business/'.$id.'/products')
                ->getChild($id_product)
                ->getValue();
    
            echo json_encode($product); 
        }

        public static function getProducts($db,$id){
            $products = $db->getReference('business/'.$id.'/')
                ->getChild('products')
                ->getSnapshot()
                ->getValue();
            echo json_encode($products);
            
        }

        public function updateProduct($db,$id,$id_product){
            $data = $db->getReference('business/'.$id.'/products')
                ->getChild($id_product)
                ->set($this->getData());
    
            if($data->getKey() != null)
                return '{"mensaje":"Producto actualizado","key":"'.   $data->getKey().'"}';
            else
                return '{"mensaje":"Error al actualizar Producto"}';
        }

        public function deleteProduct($db,$id,$id_product){
            $db->getReference('business/'.$id.'/')
                ->getChild($id_product)
                ->remove();
        }


        public function getData(){
            $data['name'] = $this->name;
            $data['description'] = $this->description;
            $data['price'] = $this->price;
            $data['previous_price'] = $this->previous_price;
            $data['img'] = $this->img;
            $data['amount'] = $this->amount;
            $data['category'] = $this->category;
            return $data;
        }
    }

?>