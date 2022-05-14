const container =  document.querySelector('.container');
const add =        document.querySelector('#add');
const input_area = document.querySelector('#input-area');
const completed =  document.querySelector(".completed") ;
const total =      document.querySelector(".total") ;

var sample_task = document.querySelector(".task");
var index = 0;

function addTask() {
    if (input_area.value.replace(/\s/g, '').length == 0) {
        return;
    }
    index++;
    var curr_task = sample_task.cloneNode(true);
    curr_task.classList.remove("hide");

    curr_task.children[2].innerHTML = input_area.value;
    curr_task.children[0].innerHTML = index;
    
    container.appendChild(curr_task);

    total.innerHTML ++ ;

    curr_task.querySelector(".delete").addEventListener("click", deleteThisTask);
    curr_task.querySelector(".up").addEventListener("click", moveUp);
    curr_task.querySelector(".down").addEventListener("click", moveDown);
    curr_task.querySelector("[type='checkbox']").addEventListener("click", markAsComplete);
}


function deleteThisTask() {
    var nextSibling = this.parentNode.nextElementSibling;

    while (nextSibling) {
        nextSibling.querySelector(".number").innerHTML--;
        nextSibling = nextSibling.nextElementSibling;
    }
    if(this.parentNode.querySelector("[type='checkbox']").checked){
        completed.innerHTML -- ;
    }
    this.parentNode.remove();
    total.innerHTML--;
    
    index--;
}

function moveUp() {

    const prevTask = this.parentNode.previousElementSibling;
    const thisTask = this.parentNode;

    // console.log(prevTask);
    // console.log(thisTask);
    // console.log(this);
    if (prevTask.previousElementSibling == undefined) {
        alert("Can't go up");
        return;
    }
    const b = prevTask.querySelector(".number").innerHTML;
    prevTask.querySelector(".number").innerHTML = thisTask.querySelector(".number").innerHTML;
    thisTask.querySelector(".number").innerHTML = b;

    thisTask.parentNode.insertBefore(thisTask, prevTask);

}

function moveDown() {
    const thisTask = this.parentNode;
    const nextTask = thisTask.nextElementSibling;
    // console.log(this);
    // console.log(thisTask);
    // console.log(nextTask);

    if (nextTask == undefined) {
        alert("Can't go down from this");
        return;
    }
    const a = nextTask.querySelector(".number").innerHTML;
    // console.log(a);
    nextTask.querySelector(".number").innerHTML = thisTask.querySelector(".number").innerHTML;
    thisTask.querySelector(".number").innerHTML = a;


    thisTask.parentNode.insertBefore(nextTask, thisTask);

}


function markAsComplete() {
    const parent = this.parentNode;
    console.log(parent);
    if (this.checked == true) {
        parent.style.backgroundColor = "#5cb85c";
        parent.style.color = "white";
        completed.innerHTML ++ ;
    }
    else {
        parent.style.backgroundColor = "white";
        parent.style.color = "black";
        completed.innerHTML -- ;
    }
}


add.addEventListener('click', addTask);
document.addEventListener("keydown", (e) => {

    if (e.key == "Enter") {
        console.log(e);
        addTask();
    }
})


