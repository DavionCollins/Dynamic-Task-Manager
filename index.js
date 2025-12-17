const input = document.querySelector(".task__input")
const button = document.querySelector(".add__button")
const taskList = document.querySelector(".task__list")

button.addEventListener("click", function() {
    const task = input.value.trim()
    if (input.value.trim() === "" ) {
        alert("Please enter a task");
    }
    else if (input.value.trim() !== "") {
        addTask(task)
        input.value = ""
    }
    
    return
    
})

function addTask(taskText) {
    const li = document.createElement("li")
    li.textContent = taskText

    li.addEventListener("dblclick", function() {
        li.classList.toggle("completed")
    })

    taskList.appendChild(li)
}