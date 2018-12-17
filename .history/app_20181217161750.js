const yargs = require('yargs');
const calculator = require ('./calc.js');

var input = yargs.argv;
var mathType = input._[0];

if(mathType === '+'){
    console.log(calculator.add(input.fn,input.ln));
}
    else if (mathType === 'subtract'){
    console.log(calculator.subtract(input.fn,input.ln));
}
    else if (mathType === 'multiply'){
    console.log(calculator.multiply(input.fn,input.ln));
}
    else if (mathType === 'divide'){
    console.log(calculator.divide(input.fn,input.ln));
}
else{
    console.log("wrong input");
}