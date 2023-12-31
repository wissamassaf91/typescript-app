var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
//create instance
var myCustomer = new Customer('Martin', 'Dixon');
console.log("".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
myCustomer.firstName = 'Wissam';
myCustomer.lastName = 'Assaf';
console.log("".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));