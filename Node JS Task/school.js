console.log("==========================","\n") 
console.log("School Managment System","\n");

function Module_1(Name, Father_Name, Class, Last_class, Last_passing_class, RolNo) {
    this.Name = Name;
    this.Father_Name = Father_Name;
    this.Class = Class;
    this.Last_class = Last_class;
    this.Last_passing_class = Last_passing_class;
    this.RolNo = RolNo;

this.student_mngment = function () {
    setTimeout(() => {
        console.log("Personal Info","\n","======================","\n");
        console.log("My Name= "+this.Name+ "\n" +"Father Name="+this.Father_Name+ "\n" +"Class= " +this.Class+ "\n" + "Last Class= " +this.Last_class+ "\n" + "Last Passing class= " +this.Last_passing_class+ "\n" + "Roll No= " +this.RolNo);
        
    }, 2000);
    
}
}

function Module_2(Admission_fees, Monthly_fees, Extracirculum_fees, Game_fees){
    this.Admission_fees = Admission_fees;
    this.Monthly_fees = Monthly_fees;
    this.Extracirculum_fees = Extracirculum_fees;
    this.Game_fees = Game_fees;

this.admin = function(){
    setTimeout(() => {
        console.log("\n","Fee Structure","\n","======================","\n");
        console.log("\n","Admission Fee is: " +Admission_fees+ "\n" + "Monthly fee Is: " +Monthly_fees+ "\n" + "Extra Criculum Fee is: " +Extracirculum_fees+ "\n" + "Game Fee is: " +Game_fees);
        
    }, 3000);
}

}
function mrk_data (Computer,submrk1,English,submrk2){ 
    this.sb1 = Computer; 
    this.sm1 = submrk1 
    this.sb2= English 
    this.sm2 = submrk2 
    this.mrk = function(){ 
        setTimeout(()=>{ 
            function reslt(b){ 
                return (b>50)? "Pass" : "Fail" } 
                console.log("\n","Marks Data","\n","======================","\n");
                console.log(" "+this.sb1," ",this.sm1,reslt(this.sm1),"\n",this.sb2," ",
                this.sm2,reslt(this.sm2)) 
            },3000) 
        } 
    } 
const m1 = new Module_1('Zakwan Abid', 'Abid Hussain', 'BCP Section A', 'BSCS', 'Intermediate', 1234)
m1.student_mngment();

const m2 = new Module_2(50000, 30000, 1800, 1300 )
m2.admin();

const total = new mrk_data("Computer",45,"English",60) 
total.mrk()


