 //  private properties and private methode 

 class customer {
     customerId;
     customerName;
     #creditcardNumber;   // # aetle private variable
     constructor(customerId,customerName,creditcardNumber){
         this.customerId = customerId;
         this.customerName = customerName;
         this.#creditcardNumber = creditcardNumber;
     }
     #getcreditcardNumber = function () {   // private function  or private method
        return this.#creditcardNumber
     }
 }
 var customer1 = new customer (101,'Hardik',1234)
 console.log(customer1.customerId)
 console.log(customer1.customerName)
/console.log(customer1.creditcardNumber)
console.log(customer1)