//******** CV through Constructor Function *********

console.log("===== RESUME =======");

function Mycv() {
    this.fname = "Zakwan Abid",
    this.Lname = "Abid Hussain",
    this.Age = "20 Years",
    this.Education = "Matric, Intermediate, BS in Computer Science",
    this.Hobby = "Reading Books",
    this.Certification = "In my Certification includes CCNA, Python, Kespersky Lab",
    this.Gmail = "ABC@gmail.com"
}

var cv = new Mycv();

console.log("Name: " +cv.fname);
console.log("Last Name: "+cv.Lname);
console.log("Age: " + cv.Age);
console.log("Education: " + cv.Education);
console.log("Hobby: "+ cv.Hobby);
console.log("Certification: " + cv.Certification );
console.log("Gmail: " + cv.Gmail);



//********   Marksheet using Obeject() Constructor ******

//It was not run in Terminal/CMD. It will run on Browser

console.log(" ****** Mark Sheet using Object() Constructor ********");

var marksheet = []

marksheet[0] = prompt("Enter Data Structure Marks: ")
marksheet[1] = prompt("Enter OOP Marks: ")
marksheet[2] = prompt("Enter Calculus Marks: ")
marksheet[3] = prompt("Enter Chemestry Marks: ")
marksheet[4] = prompt("Enter Physics Marks: ")
marksheet[5] = prompt("Enter English Marks: ")

let Avgmarks = +marksheet[0]+ + +marksheet[1]+ + +marksheet[2]+ + +marksheet[3]+ + +marksheet[4]+ + +marksheet[5] 

let avg = parseInt(Avgmarks/600 * 100);

console.log("Total Marks: 600")
console.log(" Marks Obtain: " + Avgmarks)

if (avg > 86 || avg === 100)
{
  console.log("Grade : A+");      
  } 
else if (avg > 71 || avg ===85) 
{
        console.log("Grade : A"); 
        } 
else if (avg >= 61 || avg ===70) 
 {
        console.log("Grade : B"); 
} 
else if (avg >= 51 || avg ===60) 
{
        console.log("Grade : C"); 
} 
else if ( avg < 50)
 {
        console.log("FAIL"); 
 }

var mrkSheet = new Object();

         mrkSheet.Data_Structure =   marksheet[0]
         mrkSheet.OOP =        marksheet[1]
         mrkSheet.Calculus =   marksheet[2]
         mrkSheet.Chemestry =  marksheet[3]
         mrkSheet.Physics =   marksheet[4]
         mrkSheet.English =    marksheet[5] 

console.log("Data Structure Marks: " + mrkSheet.Data_Structure);
console.log("OOP Marks: " + mrkSheet.OOP);
console.log("Calculus Marks: " + mrkSheet.Calculus);
console.log("Chemistry Marks: " + mrkSheet.Chemestry);
console.log("Physics Marks: " + mrkSheet.Physics);
console.log("English Marks: " + mrkSheet.English);



//***** careem app using Object() Constructor *****

console.log("***** Careem Application using Object() Constructor *****")

var careem = new Object()
    careem.Client = "Zakwan Abid";
    careem.pickup_location = "ABC Block 5, Street 1";
    careem.Destination = "SSUET University Karachi";
    careem.Pno = 123456778;
    careem.car = "Bussiness CAR";
    
    careem.Driver = "Herry";
    careem.time = "Your Driver is on the way!";
    careem.Amount = "Your Amount is 1200. Please pay via CASH";
    careem.feedback = "Thank you for USING careem.";

console.log("Client: " +careem.Client)
console.log("Pickup Location: " +careem.pickup_location)
console.log("Where you want to go: " +careem.Destination)
console.log("Phone Number: " +careem.Pno)
console.log("Car Name: " +careem.car)
console.log("Your Driver is: " +careem.Driver)
console.log("When will driver reach: " +careem.time)
console.log("Pay Amount: " + careem.Amount)
console.log("Feedback: " + careem.feedback)