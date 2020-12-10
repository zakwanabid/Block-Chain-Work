
console.log(" ****** CV Through Simple Array ********");

var cv =

["Zakwan Abid", 20 ,"BSCS","PAF-KIET","Reading Books","IoT, Block-chain",12345678,"zakwan@gmail.com","3 Years"]

console.log("Name: " +cv[0]);
console.log( "Age: " +cv[1]);
console.log( "Education: " +cv[2]);
console.log( "University: " +cv[3]);
console.log( "Hobby: " +cv[4]);
console.log( "Certifications: "+cv[5]);
console.log( "Mobile No: " +cv[6]);
console.log( "Gmail: " +cv[7]);
console.log( "Experience: " +cv[8]);

console.log(" ****** CV calling Through Nested Loop ********");

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

console.log("====== Array Sorting Int Numbers ========");

var arr1 = []; 
const doIt = [10, 5, 25, 34, 21, 28]; 
  
function sortIt() { 
for (let i of doIt) { 

 setTimeout(()=> { 
     
   arr1.push(i); 
   doIt.splice(doIt.indexOf(i), 1); 
   if(doIt.length === 0){ 
     console.log(arr1); 
   } 
 }, i) 
}} 
sortIt();

console.log("===== Array Sorting ASCII ====");
console.log("\n");

var names = ['Ali', 'moiz', 'daniyal', 'chaudhary', 'Zakwan', 'Abid'];

names.sort(function (a, b) {
  return a.localeCompare(b);

});

console.log(names);

