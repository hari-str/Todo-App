let todoText = document.getElementById("todo-text");
let todoUl = document.getElementById('todo-ul');

function addTask() {
    if (todoText.value.trim() == '') {
        alert('Enter some text');
    }
    else {
        let liTag = document.createElement('li');
        let spanText = document.createElement('span');

        // text Node create
        let textNode = document.createTextNode(todoText.value.trim());
        spanText.appendChild(textNode);

        // EventListener
        liTag.addEventListener('click', (e) => {
            e.target.classList.toggle('done');
        });

        let spanClose = document.createElement('span');
        spanClose.classList.add('close');
        spanClose.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        spanClose.addEventListener('click', (e) => {
            let li = e.target.parentElement.parentElement;
            li.parentElement.removeChild(li);
        });
        liTag.appendChild(spanText);
        liTag.appendChild(spanClose);

        todoUl.prepend(liTag);
        console.log(todoText.value);
        todoText.value = '';

    }
}
