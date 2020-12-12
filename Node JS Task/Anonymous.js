console.log(" ======= CV Through Anonymous Function ========");

var name = function (){ 
    var name = "Zakwan Abid" 
    return name
} 

var ph_num = function ph_num(){ 
    var num = "123456789" 
    return num 
} 

var email = function (){ 
    var email = "abc@gmail.com" 
    return email
}

var dtb = function (){ 
    var dob = "11-05-2001" 
    return dob
} 

var edu = function (){ 
    var Education = "Matric, Intermediate, Doing Bachelor in Bs Compyter From PAF-KIET University" 
    return Education
} 

var exp = function (){ 
    var exp = "2.5 Years Of Experience In Voluteering" 
    return exp
}

console.log("Name : ", name()); 
console.log("Cell No. : ",ph_num()); 
console.log("E-Mail : ",email()); 
console.log("Date of Birth : ",dtb()); 
console.log("QUALIFICATION: ", edu());  
// console.log("EXPERIENCE: ", exp());  

console.log("====== TAX Calculate Using Anonymous Function ======","\n");

var salary = 50000
var House_Price = 18000 
var car_price = 90000
var House_bill = 40000 
var grocery_bill = 20000 
var tax = function(a){ 

    if (a>10000 && a<=60000){
         var tax = a*5/100 
         var remaing = a-tax 
         return remaing 
        } 
        
        else if(a>15000 && a<=25000){ 
            var tax = a*10/100 
            var remaing = a-tax 
            return remaing 
        } 
        
        else if(a>40000 && a<=80000){ 
            var tax = a*15/100 
            var remaing = a-tax 
            return remaing 
        } 
        
        else if(a>20000){ 
            var tax = a*20/100 
            var remaing = a-tax 
            return remaing 
        } 
        
        else { 
            return a 
        } 
    } 
    
    function totaltax(){ 
        console.log("Total Salary: ",salary); 
        console.log("Salary after Tax Deduction : ",tax(salary)); 
        console.log("Total Price of House : ",House_Price); 
        console.log("Price of House after Tax Deduction : ",tax(House_Price)); 
        console.log("Total Price of Car : ",car_price); 
        console.log("Price of Car after Tax Deduction : ",tax(car_price)); 
        console.log("Total House Bills : ",House_bill); 
        console.log("House Bills after Tax Deduction : ",tax(House_bill)); 
        console.log("Total Grocery Bill : ",grocery_bill); 
        console.log("Grocery Bill after Tax Deduction : ",tax(grocery_bill)); 
    } 
    
    totaltax()

console.log(" ====== Calculator through Anonymous Function =======","\n")

var add = function(x,y){ 
    return x+y 
} 

function addition(){ 
    var result; 
    var a = 8
    var b = 5 
    result = add(a,b); 
    console.log("Addition = ",a,"+",b,"=",result); 
} 

var subt = function(x,y){ 
    return x-y 
} 

function Subtraction(){ 
    var result; 
    var a = 20 
    var b = 8
    result = subt(a,b); 
    console.log("Subtraction = ",a,"-",b,"=",result); 
} 

var mult = function(x,y){ 
    return x*y 
} 

function Multiply(){ 
    var result; 
    var a = 8 
    var b = 2 
    result = mult(a,b); 
    console.log("Multiplication = ",a,"x",b,"=",result); 
} 

var div = function(x,y){ 
    return x/y 
} 

function divide(){ 
    var result; 
    var a = 25 
    var b = 5 
    result = div(a,b); 
    console.log("Division = ",a,"/",b,"=",result); 
}

addition() 
Subtraction() 
Multiply() 
divide()

