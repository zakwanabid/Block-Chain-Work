console.log(" ======== CV Through Geter and Seter =========","\n");

var mycv = new Map() 

mycv.set("name","Zakwan Abid")
mycv.set("lname", "Abid Hussain")
mycv.set("age", "20 Years") 
mycv.set("cont","123456789") 
mycv.set ("email","abc@gmail.com")
mycv.set("qual", "Matric, Intermediate, Doing BS in Computer From PAF-KIET")
mycv.set("cer", "CCNA, CISSP, SOC, IoT")
mycv.set("exp", "2.5 Years In voluntering") 

console.log("Name : " , mycv.get("name"))
console.log("Last Name: " , mycv.get("lname"))
console.log("Age: " , mycv.get("age"))
console.log("Contact: " , mycv.get("cont"))
console.log("Email: " , mycv.get("email"))
console.log("Qualification: " , mycv.get("qual"))
console.log("Certification: " , mycv.get("cer"))
console.log("Experience: " , mycv.get("exp"))

