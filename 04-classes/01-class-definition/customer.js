var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//create instance
var myCustomer = new Customer('Martin', 'Dixon');
console.log("".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
