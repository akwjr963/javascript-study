const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
let ListArray = [];

//save LocalStorage
function saveList() {
  const listString = JSON.stringify(ListArray);
  localStorage.setItem("myList", listString);
}

//load Localstorage
function loadList() {
  const myList = localStorage.getItem("myList");
  if (myList !== null) {
    ListArray = JSON.parse(myList);
  } //배열이 존재 할 시 가져옴
  displayList();
}
loadList();

//rewrite Todo-list
function reWriteListClick(clickedId) {
  ListArray = ListArray.map(function (doList) {
    if (doList.listId === clickedId) {
      return {
        ...doList,
        listDone: !doList.listDone,
      };
    } else {
      return doList;
    }
  });
  displayList();
}

//delete Todo-list
function DeleteListClick(clickedId) {
  ListArray = ListArray.filter(function (doList) {
    return doList.listId !== clickedId;
  });
  displayList();
}

//show Todo-list
function displayList() {
  todoList.innerHTML = ""; //입력시 중복 생성 제거
  ListArray.forEach(function (doList) {
    const listItem = document.createElement("li");
    const DeleteBtn = document.createElement("span");
    DeleteBtn.textContent = "X";
    listItem.textContent = doList.listText;
    listItem.title = "complete when clicked";
    if (doList.listDone) {
      listItem.classList.add("finish");
    } else {
      listItem.classList.add("schedule");
    }
    DeleteBtn.title = "Delete when clicked";
    listItem.addEventListener("click", function () {
      reWriteListClick(doList.listId);
    });
    DeleteBtn.addEventListener("click", function () {
      DeleteListClick(doList.listId);
    });
    listItem.appendChild(DeleteBtn);
    todoList.appendChild(listItem);
  });
}

//plus Todo-list
todoForm.addEventListener("submit", function (p) {
  p.preventDefault(); //추가할때마다 새로고침 방지
  const AddContent = {
    listText: todoForm.todo.value,
    listId: new Date().getTime(),
    listDone: false,
  };
  todoForm.todo.value = "";
  ListArray.push(AddContent);
  displayList();
  saveList();
});
