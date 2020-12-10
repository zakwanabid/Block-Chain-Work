function mainmenu()
{ 
    console.log("============= CALCULATOR Using Readline =============","\n"); 

    console.log("\t What Function do you want to perform ??" + "\n"); 
    console.log("\t 1.Addition \n"); 
    console.log("\t 2.Subtraction \n"); 
    console.log("\t 3.Multiplicatiojn \n"); 
    console.log("\t 4.Division","\n"); 

var readline = require (`readline`); 
var takeInput = readline.createInterface(process.stdin , process.stdout) 
takeInput.question ("Select Operation : ", function(a){

if (parseInt(a)==1) { 

    takeInput.question ("Enter Your 1st Value : ", function(x){ 
       takeInput.question ("Enter Your 2nd Value :", function(y){

        var add = parseInt(x) + parseInt(y); 
 
        console.log("Addition is :", add); 

        takeInput.question ("Do you want to Continue ||yes ||no : ", function(z){

            if(z=='yes') { 
                mainmenu(); 
            } 

            else { 
    
                takeInput.close(); 
            } 
        }) 
    }) 
}) 
} 

else if (parseInt(a)==2) { 

    takeInput.question ("Enter Your 1st Value : ", function(x){ 
    takeInput.question ("Enter Your 2nd Value :", function(y){ 
        
            var Sub = parseInt(x) - parseInt(y); 
            console.log("Subtraction is :", Sub); 
             takeInput.question ("Do you want to Continue ||y ||n : ", function(z){ 
            if(z=='yes'){
                mainmenu();
            }

            else { 
                takeInput.close(); 
            } 
        }) 
    }) 
}) 
} 

else if (parseInt(a)==3) { 

    takeInput.question ("Enter Your 1st Value : ", function(x){ 
    takeInput.question ("Enter Your 2nd Value :", function(y){ 

            var Mult = parseInt(x) * parseInt(y);

            console.log("Multiplication is :", Mult); 
            takeInput.question ("Do you want to Continue ||y ||n : ", function(z){ 
                
            if(z=='yes') { 
                mainmenu(); 
            } 
            
            else { 
                takeInput.close(); 
            } 
        }) 
    }) 
}) 
} 

else if (parseInt(a)==4) { 
    takeInput.question ("Enter Your 1st Value : ", function(x){ 
    takeInput.question ("Enter Your 2nd Value :", function(y){

            var Div = parseInt(x) / parseInt(y); 
            console.log("Division is :", Div); 

            takeInput.question ("Do you want to Continue ||y ||n : ", function(z){ 
                
                if(z=='yes') { 
                    mainmenu(); 
                } 
                
                else { 
                    takeInput.close(); 
                } 
            }) 
        }) 
    })
}

else {
     takeInput.close(); 
    } 
}) 
} 

mainmenu()