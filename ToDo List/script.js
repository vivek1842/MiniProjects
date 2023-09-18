const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value == ''){
        alert("You must write something!"); //if empty then show error
    }
    else{
        let li = document.createElement("li"); //created li tag
        li.innerHTML = inputBox.value; //inputBox value stored in created li tag
        listContainer.appendChild(li); //to display created li tag

        let span = document.createElement("span"); //span element created 
        span.innerHTML = "\u00d7"; //cross icon created in span tag
        li.appendChild(span); //dispay the span tag
    }
    inputBox.value=""; //to remove the text after adding from inputBox
    saveData(); //whenever new added or removed saveData should called 
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData(); //save data when completed
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData(); //save data when removed
    }
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); //whatever data in listContainer tag itll be stored in browser with name "data"
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); //to get data from localstorage 
}
showTask(); //to display stored data