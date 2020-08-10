import { Customer } from './customer';
import { SalesRep } from './salesrep';

let customer: Customer = new Customer();
customer.forenames = 'John Beck';
customer.surname = 'Smith';
customer.nickname = 'Jonny';
customer.emailAddress = 'jj@gmail.com';
customer.role = 'admin';

console.log(customer);
let firstName: string = customer.firstName();
console.log(`first name: ${firstName}`);
let fullName: string = customer.fullName();
console.log(`full name: ${fullName}`);


let salesrep: SalesRep = new SalesRep();
salesrep.forenames = 'John Beck';
salesrep.surname = 'Smith';
salesrep.nickname = 'Jonny';
salesrep.emailAddress = 'jj@gmail.com';
salesrep.role = 'admin';

console.log(salesrep);
let firstName1: string = salesrep.firstName();
console.log(`first name: ${firstName1}`);
let fullName1: string = salesrep.fullName();
console.log(`full name: ${fullName1}`);


