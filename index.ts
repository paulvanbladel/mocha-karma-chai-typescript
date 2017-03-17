import { Calculator} from './calculator'
let chaihttp= require('chai-http')

let c = new Calculator();
console.log( "result = " + c.sum(1,1));
