const inputBox = <HTMLInputElement>document.querySelector(".inputSection input")!;
const addBtn = <HTMLButtonElement>document.querySelector(".inputSection button");
const todoList = <HTMLButtonElement>document.querySelector(".TodoList");
let listArr: string[];

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    (userData.trim()) ? addBtn.disabled = false :  addBtn.disabled = true;
}

addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("Todo");
    if(getLocalStorage == null){
        listArr = [];
    }
    else{
        listArr = JSON.parse(getLocalStorage)
    }
    listArr.push(userData);
    localStorage.setItem("Todo",JSON.stringify(listArr));
    showTasks();
}

const showTasks = () => {
    let getLocalStorage = localStorage.getItem("Todo");
    
    if(getLocalStorage == null){
        listArr = [];
    }
    else{
        listArr = JSON.parse(getLocalStorage)
    }
    let newLiTag = '';
    listArr.forEach((element,index) => {
       newLiTag = `<p>${element}  <button onclick=deleteTask(${index})>Delete</button></p>`
    });
    todoList.innerHTML += newLiTag;
    inputBox.value="";
}

showTasks();
