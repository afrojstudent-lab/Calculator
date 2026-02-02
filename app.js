let button = document.querySelectorAll(" .num");
let input = document.querySelector("input");
let inputVal = input.value;
let number = true;
button.forEach((num)=> {
    num.addEventListener("click",()=>{
        if(number){
            console.log(inputVal);
            number = num.innerText;
            input.value = number;
            console.log(input.value);
        }
        else{
            
        }

    });
});
