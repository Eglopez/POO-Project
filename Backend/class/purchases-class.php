<?php

    class Purchase{    
        private $productName;
        private $productPrice;
        private $amount;
        private $payment;
        private $productImg;
        private $product_description;
        private $productBusiness;

        public function __construct($productName,$productPrice,$amount,$payment,$productImg,$product_description,$productBusiness){
               
                $this->productName = $productName;
                $this->productPrice = $productPrice;    
                $this->amount = $amount;
                $this->payment = $payment;
                $this->productImg = $productImg;
                $this->product_description = $product_description;
                $this->productBusiness = $productBusiness;
        }

       


        /**
         * Get the value of productName
         */ 
        public function getProductName()
        {
                return $this->productName;
        }

        /**
         * Set the value of productName
         *
         * @return  self
         */ 
        public function setProductName($productName)
        {
                $this->productName = $productName;

                return $this;
        }

        /**
         * Get the value of productPrice
         */ 
        public function getProductPrice()
        {
                return $this->productPrice;
        }

        /**
         * Set the value of productPrice
         *
         * @return  self
         */ 
        public function setProductPrice($productPrice)
        {
                $this->productPrice = $productPrice;

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
         * Get the value of productImg
         */ 
        public function getProductImg()
        {
                return $this->productImg;
        }

        /**
         * Set the value of productImg
         *
         * @return  self
         */ 
        public function setProductImg($productImg)
        {
                $this->productImg = $productImg;

                return $this;
        }

        /**
         * Get the value of product_description
         */ 
        public function getProduct_description()
        {
                return $this->product_description;
        }

        /**
         * Set the value of product_description
         *
         * @return  self
         */ 
        public function setProduct_description($product_description)
        {
                $this->product_description = $product_description;

                return $this;
        }

        public function addPurchase($id,$db){
                $purchase = $this->getData();
                $data = $db->getReference('users/'.$id.'/purchases')
                        ->push($purchase);

                if($data->getKey() != null)
                        return '{"mensaje":"Compra agregada", "key":"'. $data->getKey().'"}';
                else
                        return '{"mensaje":"Error al agrear compra"}';                                 

        }

        public static function getPurchases($id,$db){
                $purchases = $db->getReference('users/'.$id.'/')
                ->getChild('purchases')
                ->getSnapshot()
                ->getValue();

                echo json_encode($purchases);
        }

        public static function getPurchase($id,$purchase_id,$db){
                $purchase = $db->getReference('users/'.$id.'/purchases')
                        ->getChild($purchase_id)
                        ->getValue();

               echo json_encode($purchase);        
        }

        public function getData(){
                $data['productName'] = $this->productName;
                $data['productPrice'] = $this->productPrice;
                $data['amount'] = $this->amount;
                $data['payment'] = $this->payment;
                $data['productImg'] = $this->productImg;
                $data['product_description'] = $this->product_description;
                $data['productBusiness'] = $this->productBusiness; 
                return $data;
        } 
    }

?>