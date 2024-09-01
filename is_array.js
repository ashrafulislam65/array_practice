// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

let num1 =[1,2,3,4];
let num2=0;
let num3=8;
console.log(Array.isArray(num1));
console.log(Array.isArray(num2));
console.log(Array.isArray(num3));
if(Array.isArray(num1))
{
    console.log("num1 is an array");
    
}
else{
     console.log("num1 is not array")
}
if(Array.isArray(num2))
    {
        console.log("num2 is array")
        
    }
    else{
        console.log("num2 is not array")
    }
    if(Array.isArray(num3))
        {
            console.log("num3 is array")
        }
        else{
            console.log("num3 is not array")
        }