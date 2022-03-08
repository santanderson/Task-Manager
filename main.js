function Add(){
    this.name = document.querySelector('.title');
    this.content = document.querySelector('.content');

    this.createE = () => {
        const checkBtn = document.createElement('input');
        const title = document.createElement('h2');
        const header = document.createElement('header');
        const content = document.createElement('p');
        const removeBtn = document.createElement('button');
        const li = document.createElement('li');
        const ulTasks = document.querySelector('.tasks');
        checkBtn.type = 'checkbox';
        removeBtn.type = 'button';

        this.write(checkBtn, title, header, content, removeBtn, li, ulTasks);
    };

    this.write = (checkBtn, title, header, content, removeBtn, li, ulTasks) => {
        title.innerHTML = this.name.value;
        content.innerHTML = this.content.value;
        removeBtn.innerHTML = 'Remove';
        removeBtn.addEventListener('click', this.delete);

        li.appendChild(header);
        header.appendChild(checkBtn);
        header.appendChild(title);
        li.appendChild(content);
        li.appendChild(removeBtn);
        ulTasks.appendChild(li);
    }

    this.delete = el => {
        const element = el.target;
        const li = element.parentNode;
        li.parentNode.removeChild(li);
    }
}

const func = new Add();
const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', func.createE);