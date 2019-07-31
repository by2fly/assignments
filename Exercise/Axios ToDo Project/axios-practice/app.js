// const axios = require('axios')
// console.log(axios)

// axios.get('https://api.vschool.io/brian/todo/').then((res) => {console.log(res.data, 'there iss the end')}
// )

const clear = document.querySelector(".clear");
let dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

let LIST, id;
LIST = [{} , {}, ];
id = 0;

let options = { weekday:'long', month: 'short',day: 'numeric'};
const today = new Date();
console.log(today)
dateElement.textContent = today.toLocaleDateString("en-us", options);

function addToDo(toDo, id, done, trash) {
    if(trash){ return; }
    
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    
    const item = `<li class = "item">
                    <i class = "fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class = "text ${LINE}">${toDo}</p>
                    <i class = "fa fa-trash-o de" job="delete"  id="${id}"></i> 
                </li>
                `

    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
    // addToDo("drink Coffee");
}
   
 document.addEventListener("keyup",function(event){
        if(event.keyCode == 13){        //Enter Key
            const toDo = input.value; 
            if(toDo) {
                    addToDo(toDo, id, false, false);
                    LIST.push(
                        {
                        name : toDo,
                        id: id,
                        done: false,
                        trash: false
                    });
                    id++;
            }
            input.value = "";
            }
    });

let data = localStorage.getItem("TODO");

if(data) {
        LIST = JSON.parse(data);  //turns JSON into JS
        id = LIST.length;
        loadToDo(LIST);
}else{
        LIST = [];
        id = 0;
}
function loadToDo(LIST){
    LIST.forEach(function(item) {
        addToDo(item.name, item.id, item.done, item.trash);
    });

}

// addToDo("Coffee", 1, false, false)

function completeToDo(element) {
    element.classList.toggle(CHECK);  //DOMTokenList- add, remove and toggle CSS classes on an element.
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);

        LIST[element.id].trash = true;
}
list.addEventListener("click", function(e) {
    const element = e.target;
    const elementJob = element.attributes.job.value;  //error

        if(elementJob == "complete") {
                completeToDo(element);
        } else if (elementJob == "delete") {
            removeToDo(element);
        }
    
        localStorage.setItem("TODO", JSON.stringify(LIST));
    
     
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
})
})