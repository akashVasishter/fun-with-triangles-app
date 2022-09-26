const input = document.querySelectorAll(".angles"); 
const btn = document.querySelector("#isTriangle");
const Output = document.querySelector("#output");








function sumOfAngles(angle1,angle2,angle3)
{

    const sumValue = angle1 + angle2 + angle3;
    return sumValue;

}





function isTriangle()
{


    const sum = sumOfAngles(Number(input[0].value),Number(input[1].value),Number(input[2].value));
    // we are getting the value from the user and typecasting it to Number because the value will be string in default and passing the values in a function

    if(sum === 180)
    {
        Output.innerText = "Yay, Its a Triangle 😀";
    }

    else{

        Output.innerText = "Its not a Triangle 😔 ";
    }



}


btn.addEventListener("click", isTriangle);