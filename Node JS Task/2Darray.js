console.log(" ========== CV Through 2D Array ==========","\n");

var CV = [ 

        ["Name: Zakwan Abid"],
        ["Age: " , 20],
        ["Education:  Intermediate BSCS"],
        ["University :  PAF-KIET"],
        ["Skills: Programming, IT "], 
        ["Experience:  2.5 Years "],
        ["Certifications: Python, IoT, BCP" ],
        ["Phone No: ", 123456789],
        ["Gmail: zakwan@gmail.com"],
       
     ];  
      
     for(i = 0; i<CV.length; i++){
         for(j=0; j<CV[i].length; j++){
             console.log(CV[i][j],"\n");
         }
     }