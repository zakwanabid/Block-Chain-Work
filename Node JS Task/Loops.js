console.log("====== Increment of * using for loop ==========");

var str = ""
for (var i = 0;i<5;i++){
str+="* "
console.log(str)
}

console.log("======== Increment of * using while loop ======");

var str = ""
var i = 0
while (i<5)
{
str+="* "
console.log(str)
i++
}

console.log("======== Increment of * using Do-while loop===");

var str = ""
var i = 0
do{
str+="* "
console.log(str)
i++
}
while(i<5)

console.log("====== Diamond Shape using for loop ==========");

var str = ""
var num_space = 4

for (var i = 0;i<5;i++){
var space=""

for(var s=0;s<num_space;s++){
space+=" "
}

num_space=num_space-1
str+="* "
console.log(space+str)
}

for (var i = 0;i<5;i++){
var space=" "
num_space=num_space+1

for(var s=0;s<num_space;s++){
space+=" "
}
str = str.replace("* ","")
console.log(space+str)
}

console.log("====== Diamond Shape using while loop==========");

var str = ""
var num_space = 4
var i = 0

while (i<5){
var space=""
var s = 0

while (s<num_space){
space+=" "
s++
}
num_space=num_space-1
str+="* "
console.log(space+str)
i++
}

while (i>0){
var space=" "
num_space=num_space+1
s = 0

while (s<num_space){
space+=" "
s++
}

str = str.replace("* ","")
console.log(space+str)
i--
}

console.log("====== Diamond using Do-while loop ==========");

var str = ""
var num_space = 5
var i = 0

do{
var space=""
var s = 0

do{
space+=" "
s++
}

while (s<num_space) space=space.replace(" ","")
num_space=num_space-1
str+="* "
console.log(space+str)
i++
}

while (i<5); do{
var space=" "
num_space=num_space+1
s = 0

do{
space+=" "
s++
}

while (s<num_space)
str = str.replace("* ","")
space=space.replace(" ","")
console.log(space+str)
i--
}
while (i>0)

