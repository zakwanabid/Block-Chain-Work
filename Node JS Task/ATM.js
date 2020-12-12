console.log("Welcome  To  ABC ATM  Machine","\n"); 

console.log("Please  Choose  From  Given  Options"); 
console.log("************************************","\n")
console.log("1. Cash  Withdrawl","\n")
console.log("2. Show  Available  Balance","\n")
console.log("3. Fast  Cash","\n")
console.log("4. Online  Funds  Transaction","\n") 

var  readline  =  require(`readline`)
var  takeinput  =  readline.createInterface(process.stdin,process.stdout); 
var showblnc = 80000

function atm(){ 
takeinput.question("Please  Enter  Your  Selected  Option: ",function(name){

if(name  ==  1){

console.log("\n"," You Select Cash  Withdrawl");
console.log("==================================");

takeinput.question("Please  Enter  Amount  You  Want  To  Withdraw:  ",function(a){ 

    showblnc  =	showblnc  -  parseInt(a)
    console.log("Cash  Withdrawl  Complete","\n");
    console.log("\n","Remaining  Balance  in  Your  Account  is:",showblnc) 
    contbrk()
}
)}

else  if(name  ==  2){
    console.log("\n","Show  Available  Balance  Selected"); 
    console.log("====================================");
    console.log("\n","Available  Balance  in  Your  Account  is:"+ showblnc);
 
    contbrk()
}

else  if(name  ==  3){

console.log("\n","Fast  Cash  Selected"); 
console.log("===================================="); 
console.log("1.4000	2.12000	3.25000");

takeinput.question("Please  Enter  Your  Selected  Option: ",function(ammnt){ 
    if(ammnt  ==  "1"){
        
        console.log("\n  You  have  Selected  4000  to  Withdraw","\n"); 
        showblnc  =	showblnc  -  4000
        console.log("\n","Remaining  Balance  in  Your  Account  is: ",showblnc) 
        contbrk()
}

else  if(ammnt  ==  "2"){

    console.log("\n  You  have  Selected  12000  to  Withdraw","\n"); 
    showblnc  =	showblnc  -  12000
    console.log("\n","Remaining  Balance  in  Your  Account  is: ",showblnc) 
    contbrk()
}

else  if(ammnt  ==  "3"){

    console.log("\n  You  have  Selected  22000  to  Withdraw","\n"); 
    showblnc  =	showblnc  -  22000
    console.log("\n","Remaining  Balance  in  Your  Account  is: ",showblnc) 
    contbrk()
}

else{
    console.log("Invalid  Option  Selected"); 
    atm()
}
})
}

else  if(name  ==  4){
    console.log("\n","Online  Funds  Transfer  Selected"); 
    console.log("====================================");
    takeinput.question("Please  Enter 12 Digit Account  Number  To  Transfer  Funds:  ",function(acnum){

    if(acnum.length  ==  12){
    takeinput.question("Please  Enter  Amount  You  Want  To  Transfer:  ",function(acamm){
        showblnc  =  showblnc  -  parseInt(acamm)
        console.log("Funds  Transferred");
        console.log("\n","Remaining  Balance  in  Your  Account  is: ",showblnc) 
        contbrk()
    }
)}
    else  {

    console.log("Invalid  Input"); 
    atm()
}
}
)}
})
}
    function  contbrk(){
    takeinput.question("\nDo  You  Want  To  Continue  Y/N: ",function(choice){ 
        choice.toLowerCase()
    if  (choice  ==  "y"){
         atm()
}
    else  if(choice  ==  "n"){
    console.log("\n","Thank  you  for  using  ATM"); 
    takeinput.close()
}
    else{
    console.log("Invalid  Option  Selected"); 
    contbrk()
}
})
}
                
atm()
                