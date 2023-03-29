const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background = "black";       
    }
    else{
        bodyEl.style.background = "white";
    }
}

inputEl.addEventListener("input" , ()=>{
    updateBody();               // when input is given it will update the body background color
    updateLocalStroage();       // in browser developer mode ->application ->local stroage -> it it will true or false if color is black 
                                // it means it store "true " else "false"
})

function updateLocalStroage(){
    localStorage.setItem("mode",JSON.stringify(inputEl.checked));
}