
function myMethod(){
    let text = document.createElement("li");
    let input = document.getElementById("input").value;
    let node = document.createTextNode(input);
    
    text.appendChild(node);
    let list = document.getElementById("list");
    
    list.appendChild(text)


    let cross = document.createElement("span");
    cross.innerHTML = "x";
    text.appendChild(cross);


    cross.addEventListener("click", function(){
        text.remove();
    })


}

