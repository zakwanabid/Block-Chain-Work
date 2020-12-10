console.log("****** CV Map Reformat Objects *****" ,"\n");

var cv = [
    {key: "Name", Value: "Zakwan Abid"},
    {key: "last Name", Value: "Abid Hussain"},
    {key: "Qualification" , Value: "Matric, Intermediate, BS-CS" },
    {key: "Studying" , Value: "PAF-KIET University " },
    {key: "Hobby" , Value: "Reading Books " },
    {key: "Certification" , Value: "Network Secuity, CISSP, Java-Script " },
    {key: "Experience" , Value: "3 YEARS" },
    {key: "Ph No" , Value: 12345678 },

]

let from = cv.map(nm => {
    let totl = {}
    totl[nm.key] = nm.Value
    return console.log(totl);
})


//CV through Map Entries

console.log("\n","======= MY RESUME ========");
console.log("\n");

var myResume = new Map();

myResume.set('Name: ', "Zakwan Abid");
myResume.set('last Name: ', "Abid Hussain");
myResume.set("Age: ", 20);
myResume.set('Qualification: ', "Matric, Intermediate, BS-CS");
myResume.set("Studying: ", "PAF-KIET University")
myResume.set("Hobby: ", "Reading Books");
myResume.set("Certification: ", "Network Secuity, CISSP, Java-Script");
myResume.set("Experience: " , "3 YEARS")
myResume.set("Ph No: ", 12345678);
myResume.set("Gmail: ","abc21@gmail.com");

var CV = myResume.entries();

console.log(CV.next().value);
console.log("");
console.log(CV.next().value);
console.log("");
console.log(CV.next().value);
console.log("");
console.log(CV.next().value);
console.log("");
console.log(CV.next().value);
console.log("");
console.log(CV.next().value);
console.log("");
console.log(CV.next().value);
console.log("");
console.log(CV.next().value);
console.log("");
console.log(CV.next().value);
console.log("");
console.log(CV.next().value);

//Marksheet Using Maps

console.log("Personal Info ");
console.log("=================","\n");

let Marksheet = [
    {nm: "Name:", value: "Zakwan Abid"},
    {nm: "Age: ", value : 20},
    {nm: "University: ", value : "PAF-KIET"},

    {subj: " English:   ",   value: 65},
    {subj: " Physics:   ",   value: 53},
    {subj: " Computer:  ",   value: 62},
    {subj: " Chemistry: ",   value: 45},
    {subj: " Math:      ",   value: 55},

]

var tmark = 0

let total = Marksheet.map(function(choose, index){
    

    if(index  < 3){
        return console.log(choose.nm, choose.value);
        
    }

    else if(index == 3){
        return console.log("\n","***** Mark Sheet ******", "\n")
    }

    else if(index >= 1){

        tmark = tmark+choose.value

        var cond = (choose.value>50)?"Pass" : "Fail"
        var grd1 = (choose.value >= 90)?"A+" : ""
        var grd2 = (choose.value >= 70 && choose.value < 80)?"A" : ""
        var grd3 = (choose.value>=60 && choose.value < 70)?"B" : ""
        var grd4 = (choose.value>=50 && choose.value < 60)?"C" : ""
        var grd5 = (choose.value < 50 )?"F" : ""

        return console.log(choose.subj, choose.value,cond,grd1,grd2,grd3,grd4,grd5);
                
    }
    
})

total = tmark/400*100 + "%"


console.log("\n","Total Marks: " , tmark,"\n");
console.log("Percentage: ", total);

//calculator through Map and Arrow Function

console.log("****** Calculator through Map and Arrow ******* ","\n");

var cal = [

    {n1 : 8, n2 : 3}
]

var sum = cal.map(add => add.n1 + add.n2)

var mult = cal.map(mul => mul.n1 * mul.n2)

var subt = cal.map(sub => sub.n1 - sub.n2)

var divd = cal.map(div => div.n1 / div.n2)

var modl = cal.map(mod => mod.n1 % mod.n2)

console.log("Addition of 8 + 3 is: ",sum,"\n");

console.log("Multiplication of 8 * 3 is: ",mult,"\n");

console.log("Subtraction of 8 - 3 is: ",subt,"\n");

console.log("Division of 8 / 3 is: ",divd,"\n");

console.log("Modulus of 8 % 3 is: ",modl,"\n");

//CV Map() for of Loop

console.log("\n","======= MY RESUME ========","\n"); 

var myCV = new Map([ 

    ['Name: ', "Zakwan Abid"], 
    ['last Name: ', "Abid Hussain"], 
    ["Age: ", 20], 
    ['Qualification: ', "Matric, Intermediate, BS-CS"], 
    ["Studying: ", "PAF-KIET University"], 
    ["Hobby: ", "Reading Books"], 
    ["Certification: ", "Network Secuity, CISSP, Java-Script"], 
    ["Experience: " , "3 YEARS"], 
    ["Ph No: ", 12345678], 
    ["Gmail: ","abc21@gmail.com"], 
]); 

for(let nm of myCV.entries()) 
console.log(`${nm[0]}: ${nm[1]}`);

//CV Map for each Loop

console.log("\n","======= MY RESUME ========","\n"); 

function userdata(value, key){ 
    console.log(key , " = " + value); } 
    
    var myResume = new Map(); 
    myResume.set('Name: ', "Zakwan Abid"); 
    myResume.set('last Name: ', "Abid Hussain"); 
    myResume.set("Age: ", 20); 
    myResume.set('Qualification: ', "Matric, Intermediate, BS-CS"); 
    myResume.set("Studying: ", "PAF-KIET University") 
    myResume.set("Hobby: ", "Reading Books"); 
    myResume.set("Certification: ", "Network Secuity, CISSP, Java-Script"); 
    myResume.set("Experience: " , "3 YEARS") 
    myResume.set("Ph No: ", 12345678); 
    myResume.set("Gmail: ","abc21@gmail.com");
    
myResume.forEach(userdata);




