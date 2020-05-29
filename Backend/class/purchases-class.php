<?php

    class Purchase{
        private $product;
        private $amount;
        private $payment;

        public function __construct($product,$amount,$payment){
            $this->product = $product;
            $this->amount = $amount;
            $this->payment = $payment;
        }

        /**
         * Get the value of product
         */ 
        public function getProduct()
        {
                return $this->product;
        }

        /**
         * Set the value of product
         *
         * @return  self
         */ 
        public function setProduct($product)
        {
                $this->product = $product;

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

        public function getData(){
            $data['product'] = $this->product;
            $data['amount'] = $this->amount;
            $data['payment'] = $this->payment;
            return $data;
        }
    }

?>