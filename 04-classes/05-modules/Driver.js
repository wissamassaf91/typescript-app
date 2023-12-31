"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("../04-parameter-properties/Customer");
//create instance
var myCustomer = new Customer_1.Customer('Martin', 'Dixon');
console.log("".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
myCustomer.firstName = 'Wissam';
myCustomer.lastName = 'Assaf';
console.log("".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
