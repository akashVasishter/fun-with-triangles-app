const sides = document.querySelectorAll('.side-inputs');
const btn = document.querySelector('#calculate-hypotenuse');
const Output = document.querySelector('#output');





function calculateHypotenuse()
{

    var sum = calculateSumofSquare(Number(sides[0].value),Number(sides[1].value));
    var Length = Math.sqrt(sum);   
   
    Output.innerText = "Length of the hypotenuse is: " +Length ; 
   
    
   
}


function calculateSumofSquare(a,b)
{
    

     var SumofSquare =  a*a + b*b;
     return SumofSquare;

    
}



btn.addEventListener('click', calculateHypotenuse);