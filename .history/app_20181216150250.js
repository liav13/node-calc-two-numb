let calculator = require ('./calc.js');




var input = yargs.argv;
var mathType = input._[0];
if(mathType === 'add'){
    console.log(calculator.add(input.fn,input.ln));
}