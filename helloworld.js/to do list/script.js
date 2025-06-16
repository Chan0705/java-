const addBtn = document.getElementById('button');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('TODOLIST');

addBtn.addEventListener('click', () => {
    const inputText = todoInput.ariaValueMax.trim();
    if (inputText === '') {
        return;
    }

    const li = document.createElement('li');

    li.innerHTML = `
    ${inputText}
    <button id = "deleteButton">삭제</button>`;

    // todo리스트 추가
    todoList.appendChild(li);

    //to리스트 삭제
    li.querySelector(".deleteButton").addEventListener('click', () => {
        li.remove();
    });

    //초기화
    todoInput.value = '';
});