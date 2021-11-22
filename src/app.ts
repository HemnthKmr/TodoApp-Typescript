const inputBox = <HTMLInputElement>document.querySelector(".inputSection input")!;
const addBtn = <HTMLButtonElement>document.querySelector(".inputSection button");
const todoList = <HTMLElement>document.querySelector(".TodoList");
const pendingNumber = <HTMLElement>document.querySelector(".pendingNumber");
const clearAllBtn = <HTMLButtonElement>document.querySelector(".clearAll")
let listArr: string[];
let userData: string;
let newLiTag: string;

inputBox.onkeyup = () => {
    userData = inputBox.value;
    (userData.trim()) ? addBtn.disabled = false : addBtn.disabled = true;
}

const getData = () => {
    let getLocalStorage = localStorage.getItem("Todo");
    if (getLocalStorage == null) {
        listArr = [];
    }
    else {
        listArr = JSON.parse(getLocalStorage)
    }
    showTasks();
}

addBtn.onclick = () => {
    listArr.push(userData);
    localStorage.setItem("Todo", JSON.stringify(listArr));
    showTasks();
}

const showTasks = () => {
    newLiTag = "";
    pendingNumber.textContent = `${listArr.length}`;
    listArr.forEach((element: any, index: number) => {
        newLiTag += `<p>${element}  <button onclick=deleteTask(${index})>Delete</button></p>`
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

const deleteTask = (index: number) => {
    listArr.splice(index, 1)
    localStorage.setItem("Todo", JSON.stringify(listArr));
    showTasks();
}

clearAllBtn.onclick = () => {
    listArr = [];
    localStorage.setItem("Todo", JSON.stringify(listArr));
    showTasks();
}

getData();


