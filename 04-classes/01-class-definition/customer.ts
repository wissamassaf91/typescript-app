class Customer{
    firstName:string;
    lastName:string;
    constructor(theFirst:string,theLast:string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

//create instance

let myCustomer = new Customer('Martin','Dixon');

console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);