let button = document.querySelectorAll(".num");
let input = document.querySelector("input");
let string = "";
let str = string
let arr = Array.from(button);
arr.forEach((num)=> {
    num.addEventListener("click",(e)=>{
        if(e.target.innerText == "=" || e.target.innerText == "Enter"){
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerText == "AC"){
            string = "";
            input.value = string;
        }
        else if(e.target.innerText == "C"){
            string = string.slice(0,-1);
            input.value = string;
        }
        else{
        string+= e.target.innerText;
        input.value = string;
        }
    });
});
