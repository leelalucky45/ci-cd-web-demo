const tags=document.getElementsByTagName("p")
const classElements=document.getElementsByClassName("btn")

let button = document.getElementById("clickbtn");
const message = document.querySelector("#message");
const resetButton=document.getElementById("btn1")

function handleclick(){
    console.log("Button clicked")
}
resetButton.addEventListener("click", function(){
    document.getElementById("first-heading").textContent="Hellloooo Geetha";
})



console.log(message.parentElement);
console.log(message.nextElementSibling);
console.log(message.parentElement.dataset.user);
message.setAttribute("title", "Welcome Geetha");


button.addEventListener("click", function(){
    document.getElementById("first-heading").textContent="Hellloooo Leeelaa";
})

    
console.log(tags)
console.log(classElements)