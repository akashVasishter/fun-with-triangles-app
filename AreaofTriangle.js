const side = document.querySelectorAll('.sides');
const btn  = document.querySelector('#calculate-area');
const Output = document.querySelector('#output');




function calculateareaOfTriangle()
{
    var calcarea = calculatearea(Number(side[0].value),Number(side[1].value));
    Output.innerText = "The Area of Triangle is:" +calcarea + "CM2";
}


function calculatearea(b,h)
{
   const area = (b*h)/2;
   return area;
}


btn.addEventListener("click",calculateareaOfTriangle)