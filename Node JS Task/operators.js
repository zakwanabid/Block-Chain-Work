console.log(" ****** SIMPLE Calculator ********");

var cal = []

val1 = cal[0] = prompt("Enter 1st Value: ")
total = cal[1] = prompt("Enter Operator: ")
val2 = cal[2] = prompt("Enter 2nd Value: ")

var add = cal[0] + cal[2]
var subt = cal[0] - cal[2]
var Mult = cal[0] * cal[2]
var Div = cal[0] / cal[2]
var Mod = cal[0] % cal[2]

if(total == '+'){
    console.log("Your Addition is: " + val1 + val2);
}

else if(total == '-'){
    console.log("Your Subtraction is: "+ val1 - val2);
}

else if(total == '*'){
    console.log("your Multiplication is: " + val1 * val2);
}

else if(total == '/'){
    console.log("your Division is: " + val1 / val2);
}

else(total == '%');{

    console.log("your Modulus is: " + val1 % val2);
}
