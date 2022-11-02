  
function checkPrime(num){
let fact=0;
   
for(let i=0; i<=num; i++){
if(num%i==0){
fact++; 
}

if(fact==2){
     console.log(prime number);  
} else {
  console.log(not prime number);
}


