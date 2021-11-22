"use strict";
const inputBox = document.querySelector(".inputSection input");
const addBtn = document.querySelector(".inputSection button");
const todoList = document.querySelector(".TodoList");
let listArr;
inputBox.onkeyup = () => {
    let userData = inputBox.value;
    (userData.trim()) ? addBtn.disabled = false : addBtn.disabled = true;
};
addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("Todo");
    if (getLocalStorage == null) {
        listArr = [];
    }
    else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("Todo", JSON.stringify(listArr));
    showTasks();
};
const showTasks = () => {
    let getLocalStorage = localStorage.getItem("Todo");
    if (getLocalStorage == null) {
        listArr = [];
    }
    else {
        listArr = JSON.parse(getLocalStorage);
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag = `<p>${element}  <button onclick=deleteTask(${index})>Delete</button></p>`;
    });
    todoList.innerHTML += newLiTag;
    inputBox.value = "";
};
showTasks();
//# sourceMappingURL=app.js.map