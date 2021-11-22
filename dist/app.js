"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const inputBox = document.querySelector(".inputSection input");
const addBtn = document.querySelector(".inputSection button");
const todoList = document.querySelector(".TodoList");
const pendingNumber = document.querySelector(".pendingNumber");
const clearAllBtn = document.querySelector(".clearAll");
let listArr;
let userData;
let newLiTag;
inputBox.onkeyup = () => {
    userData = inputBox.value;
    (userData.trim()) ? addBtn.disabled = false : addBtn.disabled = true;
};
const getData = () => {
    let getLocalStorage = localStorage.getItem("Todo");
    if (getLocalStorage == null) {
        listArr = [];
    }
    else {
        listArr = JSON.parse(getLocalStorage);
    }
    showTasks();
};
addBtn.onclick = () => {
    listArr.push(userData);
    localStorage.setItem("Todo", JSON.stringify(listArr));
    showTasks();
};
const showTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    newLiTag = "";
    pendingNumber.textContent = `${listArr.length}`;
    listArr.forEach((element, index) => {
        newLiTag += `<p>${element}  <button onclick=deleteTask(${index})>Delete</button></p>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
});
const deleteTask = (index) => {
    listArr.splice(index, 1);
    localStorage.setItem("Todo", JSON.stringify(listArr));
    showTasks();
};
clearAllBtn.onclick = () => {
    listArr = [];
    localStorage.setItem("Todo", JSON.stringify(listArr));
    showTasks();
};
getData();
//# sourceMappingURL=app.js.map