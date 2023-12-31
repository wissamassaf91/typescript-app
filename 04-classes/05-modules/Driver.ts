import {Customer} from '../04-parameter-properties/Customer'

//create instance

let myCustomer = new Customer('Martin','Dixon');

console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);

myCustomer.firstName = 'Wissam';
myCustomer.lastName = 'Assaf';

console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);