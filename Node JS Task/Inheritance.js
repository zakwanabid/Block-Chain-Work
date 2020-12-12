console.log(" ======= CV Through Inheritance ========","\n")

class CV{ 
    constructor(name,lname,Age,ph_num,email,edu,exp,certification){ 
        this.name = name; 
        this.lname = lname; 
        this.Age = Age;
        this.ph_num = ph_num; 
        this.email = email; 
        this.edu = edu;
        this.exp = exp;
        this.certification = certification;
    }
}
class resm extends CV{ 
    get _name (){
        return this.name
    } 
    get _lname(){
        return this.lname
    }
    get _Age(){
        return this.Age
    }
    get _ph_num(){ 
        return this.ph_num
    } 
    get _email (){
        return this.email
    } 
    get _edu(){ 
        return this.edu
    }
    get _exp(){
        return this.exp
    }
    get _certification(){
        return this.certification
    }
}

var mycv = new resm("Zakwan Abid", "Abid Hussain","20","123456789","abc@gmail.com",
               "Matric, Intermediate, Doing BSCS From PAF-KIET", "2.5 Years In voluntering",
               "CCNA, CISSP, SOC, IoT")

console.log(`Name:          ${mycv._name}
            Last Name:     ${mycv._lname}
            Age:           ${mycv._Age}
            Contact No:    ${mycv._ph_num}
            Email:         ${mycv._email}
            Education:     ${mycv._edu}
            Experience:    ${mycv._exp}
            Certification: ${mycv._certification}`);

