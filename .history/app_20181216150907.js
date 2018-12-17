const yargs = require('yargs');
const calculator = require ('./calc.js');

var input = yargs.argv;
var mathType = input._[0];
if(mathType === 'add'){
    console.log(calculator.add(input.fn,input.ln));
}
    else if (mathType === 'subtract'){
        console.log(calculator.subtract(input.fn,input.ln));
}