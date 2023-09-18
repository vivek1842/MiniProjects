const notesContainer = document.querySelector(".notes-container"); //
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML); //whatever stored in notesContainer will be saved in browser under the name of "notes"
}


createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p"); //create inputBox variable and stored p element i.e. p element created
    let img = document.createElement("img"); //img element created
    inputBox.className = "input-box"; //add one class name(i.e. input-box) in created p element
    inputBox.setAttribute("contenteditable", "true"); //added an attritube in p element
    img.src = "images/delete.png"; 
    notesContainer.appendChild(inputBox).appendChild(img); //to display in notesContainer
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName == "IMG"){ //if target element is img then execute
        e.target.parentElement.remove(); //remove that parent element
        updateStorage(); //after deleting a note, it should be saved
    } 
    else if(e.target.tagName == "P"){  //to store data written in p element
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
})

/*
keydown is used to whenever user use "Enter" button in keyboard in p element automatically add LineBreak & prevent default feature of enter keyword
*/

document.addEventListener("keydown", event =>{
    if(event.key == "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})