// INPUT PROPERTIES

const userInput = document.getElementById("user-input");
const addButton = document.getElementById("add-btn");
const ul = document.getElementById("unlist");



// ADDING tasks by CLICKING

addButton.addEventListener("click", function () {

    //toggle visibility on containerGlass ... fix it to disappear
    const containerGlass = document.getElementById("container-glass");
    containerGlass.style.visibility = "visible";

    if (userInput.value.length > 0) {     //if userInput empty, no element added
        
        

        //add div
        const div = document.createElement("div");
        div.classList.add("list-item");

        //add list item
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(userInput.value));
        div.appendChild(li);

        //add buttons
        const doneButton = document.createElement("button");
        doneButton.innerHTML = '<i class="fas fa-check"></i>';
        doneButton.classList.add("done-btn");
        div.appendChild(doneButton);

        //checked item
        doneButton.addEventListener("click", function () {
            div.classList.add("animate-checked");
            setTimeout(() => { div.remove(); }, 1000);
        });

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
        deleteButton.classList.add("delete-btn");
        div.appendChild(deleteButton);

        //deleted item
        deleteButton.addEventListener("click", function () {
            div.classList.add("animate-delete");
            setTimeout(() => { div.remove(); }, 1000);
        });

        //append div to the unordered list
        ul.appendChild(div);

        userInput.value = "";           //clear userInput
    }

});

// ADDING tasks BY USING ENTER 

userInput.addEventListener("keypress", function (event) {



    if (userInput.value.length > 0 && event.keyCode === 13) {
        //if userInput empty, no element added

        //toggle visibility on containerGlass ... fix it to disappear
        const containerGlass = document.getElementById("container-glass");
        containerGlass.style.visibility = "visible";

        //add div
        const div = document.createElement("div");
        div.classList.add("list-item");

        //add list item
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(userInput.value));
        div.appendChild(li);

        //add buttons
        const doneButton = document.createElement("button");
        doneButton.innerHTML = '<i class="fas fa-check"></i>';
        doneButton.classList.add("done-btn");
        div.appendChild(doneButton);

        //checked item
        doneButton.addEventListener("click", function () {
            div.classList.add("animate-checked");
            setTimeout(() => { div.remove(); }, 1000);
        });

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
        deleteButton.classList.add("delete-btn");
        div.appendChild(deleteButton);

        //deleted item
        deleteButton.addEventListener("click", function () {
            div.classList.add("animate-delete");
            setTimeout(() => { div.remove(); }, 1000);
        });

        //append div to the unordered list
        ul.appendChild(div);

        userInput.value = "";           //clear userInput
    }

});