function Add(){
    this.name = document.querySelector('.title');
    this.content = document.querySelector('.content');

    this.createE = () =>{
        const checkBtn = document.createElement('input');
        const title = document.createElement('h2');
        const content = document.createElement('p');
        const removeBtn = document.createElement('button');
        checkBtn.type = 'checkbox';
        removeBtn.type = 'button';
    };
}

const func = new Add();
const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', func.createE());