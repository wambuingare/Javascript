
<body>
    <h2>My First Web Page</h2>
<p>My First Paragraph.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>
    
</body>
// </html> 

let x,y,z;    
x = 5;          
y = 6;          
z = x + y;  

console.log(z)

let X = 5;    
let Y = x + 2;

console.log(y)

const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';

console.log(pi)


let Person = "John Doe",
carName = "Volvo",
price = 200;

console.log(person)


var  scope1 =  "global scope"  ; 
function  MyFunc  () { 
   var  scope2 =  "local scope"  ; 
   function  AnotherFunc  () { 
       return  scope1 + scope2; 
    } 
return  AnotherFunc(); 
} 
MyFunc()
